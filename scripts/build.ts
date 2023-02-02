import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { basename, resolve } from 'node:path'
import { transform as cssTransformer } from 'lightningcss'
import { cyan, green, yellow } from 'picocolors'

const cwd = process.cwd()

const preflight = async (outDir: string) => {
  const destDir = resolve(cwd, outDir)

  if (existsSync(destDir))
    await rm(destDir, { recursive: true })
  await mkdir(destDir)
}

interface Options {
  entries: string[] | string
  outputDir?: string
  minify?: boolean
}

const build = async (options?: Options) => {
  const { entries: _entries, outputDir = 'dist', minify = false } = options || {}
  if (!_entries)
    throw new Error('No entries provided')

  console.log(yellow('✨'), 'Building CSS using', yellow('LightningCSS'), '\n')

  const start = Date.now()

  await preflight(outputDir)

  const entries = Array.isArray(_entries) ? _entries : [_entries]

  const transform = (code: string, id: string) => {
    console.log(yellow('⚡'), 'Transforming', cyan(basename(id)))

    const { code: css } = cssTransformer({
      code: Buffer.from(code),
      filename: id,
      minify,
    })

    return css.toString()
  }

  for (const entry of entries) {
    const srcPath = resolve(cwd, entry)
    const outPath = resolve(cwd, outputDir, basename(entry))

    const rawCode = await readFile(srcPath, 'utf-8')
    const css = transform(rawCode, srcPath)
    await writeFile(outPath, css)
  }

  const end = Date.now()

  console.log('')
  console.log(green('✔'), ' Done in', cyan(`${end - start}ms`))
}

build({
  entries: ['./src/index.css', './src/extra.css'],
  minify: true,
}).catch(console.error)
