import type { Options } from 'tsup'

export const tsup: Options = {
  splitting: false,
  sourcemap: false,
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  entryPoints: [
    'src/index.ts',
    'src/extra.ts',
  ],
  external: [],
}
