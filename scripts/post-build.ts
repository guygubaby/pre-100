import { readFile, readdir, writeFile } from 'node:fs/promises'
import { basename, resolve } from 'node:path'

const injectExtraJs = async () => {
  const cwd = process.cwd()
  const distFolder = resolve(cwd, 'dist')
  const allFiles = await readdir(distFolder)
  const files = allFiles.filter(file => /.m?js$/.test(file))

  const promises = files.map(async (file) => {
    const filePath = resolve(distFolder, file)
    const content = await readFile(filePath, 'utf-8')

    const extraJs = basename(file).replace(/\.m?js$/, '.css')
    const prefix = /\.mjs$/.test(file) ? 'import' : 'require'
    const suffix = prefix === 'import' ? ` './${extraJs}'` : `('./${extraJs}')`
    const js = prefix + suffix

    const newContent = `${content}${js}`
    await writeFile(filePath, newContent)
  })

  await Promise.all(promises)
}

injectExtraJs().catch(console.error)
