After wrestling with feature folders, domain folders, and flat structures — FSD finally gave me a mental model that scales.

## The problem with flat structure

Early-stage projects start flat: `components/`, `pages/`, `store/`. It works until you hit ~20 features. Then you're searching for `UserCard` in a directory with 80 components.

## What FSD actually is

FSD organises code into layers (`app → pages → widgets → features → entities → shared`), each containing slices (business domains), each slice containing segments (`ui`, `model`, `api`). The strict rule: a layer can only import from layers below it.

```text
src/
  app/         providers, router, global styles
  pages/       route-level compositions
  widgets/     self-contained UI blocks
  features/    user actions (auth, cart, search)
  entities/    business models (user, product)
  shared/      ui kit, helpers, types
```

## Applying it in Nuxt.js

Nuxt's `pages/` maps to FSD's `pages` layer naturally. I keep Nuxt's auto-imports for `shared/ui` and configure path aliases so `@entities/user` resolves correctly. Pinia stores live in the `model` segment of their slice.

## The one rule that matters

The import direction rule is what makes FSD work. Enforce it with eslint-plugin-boundaries. Without the linter, teams slowly break it and you lose the benefit.

## When not to use it

FSD adds upfront structure overhead. For a landing page or an app with fewer than five screens, it's overkill. The break-even point is roughly when you have 3+ developers or 10+ distinct user flows.
