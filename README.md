# test

<h4>Creating webpack set up from scratch </h4>

-- Add wepack:
```
npm i webpack  webpack-cli --save-dev
```

-- Add webpack devserver
```
npm i webpack-dev-server --save-dev
```

-- Add Hot releading
```
npm i html-webpack-plugin --save-dev 
```
-- Add babel
```
npm i babel-loader @babel/core --save-dev
npm i @babel/preset-env --save-dev
```
-- Run dev server
```
npm run build
npm run dev
```

<h4> Adding Css Loader </h4>

-- Add Css loader
```
npm i style-loader css-loader --save-dev
```

-- Add Sass
```
npm i sass-loader sass --dev-dev
```

-- Add postcss loader
```
npm i postcss-loader postcss --save-dev
```

-- Add post-css plugins

Autoprefixer = adds vendor prefixes for browser support.
cssnano - minify and compress css.
satchel -- useful utilities https://www.satchel.style/getting-started .

or use rucksack-css https://github.com/madeleineostoja/rucksack .

```
 npm i cssnano autoprefixer satchel-css --save-dev
```


-- Add mincss extract plugin = seperates css files

```
npm i mini-css-extract-plugin --save-dev
```
<h4> Setting up dev and prod configs </h4>
-- For Windows NODE_ENV to work

```
npm install -g win-node-env
```

Wepack merge

```
npm install --save-dev webpack-merge

```
