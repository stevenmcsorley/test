# test

html pages with Webpack 5
================================
[> PREVIEW LIVE](https://stevenmcsorley.github.io/test/)

## Development

- `npm i` - install dependencies
- `npm run dev` - start development server
- `npm run test:watch` - run jest tests with watch
- `npm run cy:run` - run Cypress functional/browser/e2e tests. Works only when running website locally (`npm run dev`)

## Production

- `npm run build` to prepare `html`, `css`, `js` files in `dist/` directory for production files locally
- `npm run deploy` - run build and deploy to pages
