# pre-100

100 Bytes of CSS to look great everywhere

[![NPM version](https://img.shields.io/npm/v/pre-100?color=a1b858&label=)](https://www.npmjs.com/package/pre-100)

## Brief intro

For more [100 Bytes of CSS to look great everywhere](https://www.swyx.io/css-100-bytes)

## Get Started

```bash
pnpm i pre-100
```

```ts
import 'pre-100' // just 100 bytes css preflights
import 'pre-100/extra.css' // extra 100 bytes css preflights
```

### Or use from CDN

```html
<link rel="stylesheet" href="https://unpkg.com/pre-100@latest/dist/index.css" />
<link rel="stylesheet" href="https://unpkg.com/pre-100@latest/dist/extra.css" />
```

## Features

### 1. 100 bytes css preflights

```css
html {
  max-width: 70ch;
  padding: 3rem 1rem;
  margin: auto;
  line-height: 1.75;
  font-size: 1.25rem;
}
```

### 2. 100 bytes css preflights with extra

```css
h1,h2,h3,h4,h5,h6 {
  margin: 3rem 0 1rem;
}

p,ul,ol {
  margin-bottom: 2rem;
  color: #1d1d1d;
  font-family: sans-serif;
}
```

## License

[MIT](./LICENSE) License © 2023 [guygubaby](https://github.com/guygubaby)
