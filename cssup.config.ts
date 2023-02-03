import { defineConfig } from '@bryce-loskie/cssup'

export default defineConfig({
  entryPoints: ['src/index.css', 'src/100.css', 'src/extra.css'],
  minify: true,
})
