import { existsSync, readFileSync } from 'node:fs'

const required = ['index.html', 'src/main.js', 'src/styles.css']
const missing = required.filter((file) => !existsSync(file))
if (missing.length) throw new Error(`Missing required files: ${missing.join(', ')}`)
const html = readFileSync('index.html', 'utf8')
if (!html.includes('src/main.js')) throw new Error('The application entry point is not linked from index.html.')
console.log('Build validation completed successfully.')
