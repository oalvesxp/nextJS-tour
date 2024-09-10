## Glossário do NextJS

- **Static**

  - Por padrão
  - `next export`, somente quando todo o código for pré-renderizado

- **SSG (Static Site Generation)**

  - `getStaticProps`
  - `revalidade`: true [npm run build && npm start]

  - **ISG (Incremental Static Generation)**
    - `fallback`: true || 'blocking'

- **SSR (Server Side Render)**

  - `getServerSideProps`
  - `/api/`
