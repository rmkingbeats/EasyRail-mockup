import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'

const outputDirectory = 'dist'
const required = ['index.html', 'src/main.js', 'src/styles.css']
const missing = required.filter((file) => !existsSync(file))

if (missing.length) throw new Error(`Missing required files: ${missing.join(', ')}`)

const html = readFileSync('index.html', 'utf8')
const requiredReferences = ['/src/main.js', '/src/styles.css']
const missingReferences = requiredReferences.filter((reference) => !html.includes(reference))

if (missingReferences.length) {
  throw new Error(`Missing required asset references in index.html: ${missingReferences.join(', ')}`)
}

rmSync(outputDirectory, { force: true, recursive: true })

for (const file of required) {
  const destination = join(outputDirectory, file)
  mkdirSync(dirname(destination), { recursive: true })
  copyFileSync(file, destination)
}

const missingOutput = required.filter((file) => !existsSync(join(outputDirectory, file)))
if (missingOutput.length) throw new Error(`Build output is incomplete: ${missingOutput.join(', ')}`)

console.log(`Static site built successfully in ${outputDirectory}.`)
