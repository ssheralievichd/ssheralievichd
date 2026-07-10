A slow dashboard query was costing us 2 seconds per page load under moderate traffic. Here's the full diagnostic process.

## Start with EXPLAIN ANALYZE

Never guess. Run `EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)` and look for Seq Scans on large tables, high row estimates vs actual rows, and nested loop joins on unindexed columns.

```sql
EXPLAIN (ANALYZE, BUFFERS)
SELECT u.id, count(o.id)
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.created_at > NOW() - INTERVAL '30 days'
GROUP BY u.id;
```

## The problem: missing partial index

The planner was doing a full sequential scan on `orders` (4M rows) because the index on `user_id` had poor selectivity — most users had orders. A partial index on active users only cut the scan to ~80k rows.

```sql
CREATE INDEX CONCURRENTLY idx_orders_recent_users
ON orders (user_id)
WHERE created_at > '2024-01-01';
```

## ORM-generated SQL often needs help

Django's ORM generated a subquery where a JOIN would have been faster. `select_related` and `prefetch_related` are good defaults but check the SQL with `queryset.query` or django-debug-toolbar on complex aggregations.

## Statistics and vacuuming

Bad row estimates usually mean stale statistics. Run `ANALYZE table_name` and check `pg_stat_user_tables` for tables with high `n_dead_tup`. Autovacuum defaults are often too conservative for high-write tables.

## Result

Partial index + rewritten join: 2100ms → 40ms. No schema changes, no caching layer needed.
