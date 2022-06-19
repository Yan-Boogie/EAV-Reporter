# EAV-Reporter

## TODOs

### Main

- [x] Lerna Repo structure
  - [x] BE workspace:
    - [x] SSR enabled GQL env with resolver / schema structure
    - [x] DbService with orbit-db & ipfs
  - [x] UIModules workspace:
    - [x] Rollup bundler
  - [x] FE workspace:
    - [x] Webpack5 bundler with router dynamic import & Lazy loading (React 18 `lazy()`), including RWD lazy loading
    - [x] User-Flow & File structure: pages & routes & navigations feat. AppLayout
      - [x] SPA AppLayout.tsx (Component interface only)
- [ ] BE features
  - [x] Report context setup -> localStorage save config id
  - [x] Schemas and Resolvers design
  - [x] Build DBService feature: config access
  - [ ] RenderSection resolver and schemas
  - [ ] React18 SSR streaming HTML endpoint middleware & HTML design
- [x] UIModules features
  - [x] Build components
- [ ] FE features
  - [ ] localStorage record
  - [ ] form controll
  - [ ] build pages with UIModules including RWD

#### Optional

- [ ] BE workspace: GQL `type-di` for Service DI pattern `low priority`
