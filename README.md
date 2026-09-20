# License Usage admin

Internal dashboard for browsing customer licenses and updating seats allowed. Built as a Next.js App Router take-home with TypeScript strict mode, TanStack Query, and a small shadcn set.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `/` redirects to `/licenses`.

```bash
npm run test
npm run lint
npx tsc --noEmit
```

To see the load-error path, open `/licenses?fail=1`.

There is no external API. `GET /api/licenses` and `PATCH /api/licenses/[id]` read and write an in-memory copy of 50 mock records. Restarting the dev server resets that copy.

## Folder structure

```text
src/
  app/                         # Next.js routes only (thin)
    licenses/                  # /licenses page + fail query helper
    api/licenses/              # GET list, PATCH seats
  components/ui/               # Shared shadcn primitives
  lib/                         # Tiny shared helpers (cn)
  features/licenses/           # Feature module (most of the app)
    licenses-page.tsx          # Page composition only
    api/                       # Client fetch/patch against Route Handlers
    model/                     # Domain types, validation, table view logic, tests
    hooks/                     # Page, filters, seats form, query/mutation hooks
    utils/                     # Pure helpers (format, seats, filters, compare)
    server/                    # Mock data + in-memory store (server-only)
    components/
      layout/                  # Page shell, header, stats, content section
      table/                   # Toolbar, table, pagination, empty/error/loading
      panel/                   # Detail sheet + edit seats form
      shared/                  # Badge, seat usage, stat card
```

Each folder exposes a barrel `index.ts`. Types live in nearby `types.ts` files. Cross-folder imports go through barrels;

## What I prioritized

1. **Typed boundaries.** License, plan, status, and API error shapes live in the feature model. The Route Handlers and the client share the same validation for seats allowed.
2. **A real fetch layer, not a local import in the page.** The UI talks to Route Handlers through TanStack Query so loading, error, retry, and cache updates look like production even though the data is mock.
3. **Client-side table work.** Search (debounced), status/plan filters, sort, and paging all run on the already-fetched list. Page size is 10.
4. **Two empty states.** An empty source list is different from “filters hid every row.”
5. **Safe seat edits.** The side panel reuses the same `validateSeatsAllowed` helper as `PATCH`. Allowed seats cannot drop below seats used.



## Time spent

Roughly 4 hours total: about 1.5 hours planning, then about 1.5 hours for implementation, iteration, tests, and 1 hour on polishing the UI. Work ran in short phases (scaffold → mock API → load states → table → badges/empty → panel/save → tests/README) rather than one long session.

## If I had more time

- Auth for an internal admin (session / role gate on mutate).
- Prefetch licenses on the server and pass `initialData` so first paint isn’t a skeleton.
- Keep table height stable across loading and pagination to avoid layout shift.
- Sync search with page resets so debounce doesn’t leave search and page out of step for a moment.
- Put filters, sort, and page in the URL so refresh and sharing keep the view.
- Add a failing `PATCH` demo query, same idea as `?fail=1` on GET.
- Add error monitoring (e.g. Sentry) for API failures.

