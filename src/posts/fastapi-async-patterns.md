Most FastAPI tutorials stop at hello-world endpoints. Here's what I learned running async services under real traffic.

## The async trap

Marking a route `async def` doesn't make it faster — it only helps if you await non-blocking I/O. If you call a synchronous library (like a standard ORM query) inside an async route, you block the event loop for every request.

The fix: use `run_in_executor` for blocking calls, or switch to an async driver (asyncpg, motor, aioredis).

## Connection pool sizing

Default asyncpg pool size is 10. Under load that's almost always wrong. Start with `min_size=5, max_size=20` and tune based on your DB server's `max_connections` and observed wait times. Don't guess — instrument with Prometheus counters on pool checkout time.

## Background tasks vs workers

FastAPI's `BackgroundTasks` run in the same process after the response is sent. Good for fire-and-forget logging. Bad for anything that takes >500ms or needs retry logic. Use Celery or ARQ for real background work.

## Lifespan for startup/shutdown

Move pool creation into the `@asynccontextmanager` lifespan handler — not into a global or `@app.on_event` (deprecated). This gives you clean startup sequencing and guaranteed teardown.

```python
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.pool = await asyncpg.create_pool(DATABASE_URL)
    yield
    await app.state.pool.close()
```

## Where async hurts

CPU-bound work (image processing, heavy computation) doesn't benefit from async — it saturates one core. Offload to a process pool or a dedicated worker. Async shines for I/O-bound, high-concurrency workloads.
