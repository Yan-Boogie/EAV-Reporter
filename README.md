# EAV-Reporter

## TODOs

### Env build

- [ ] Lerna Repo structure
  - [ ] BE workspace:
    - [ ] SSR enabled GQL env with resolver / schema structure
    - [ ] DbService with orbit-db & ipfs
    - [ ] GQL `type-di` for Service DI pattern `low priority`
  - [x] UIModules workspace:
    - [x] Rollup bundler
  - [ ] FE workspace:
    - [ ] Webpack5 bundler with router dynamic import & Lazy loading (React 18 `lazy()`), including RWD lazy loading
    - [ ] User-Flow & File structure: pages & routes & navigations feat. AppLayout
      - [ ] SPA AppLayout.tsx (Component interface only)
- [ ] BE features
  - [ ] Report context setup
  - [ ] React18 SSR streaming HTML endpoint & HTML design
  - [ ] Schemas and Resolvers design
- [ ] UIModules features
  - [ ] Build components with storybook
- [ ] FE features
  - [ ] localStorage record
  - [ ] build pages with UIModules including RWD
