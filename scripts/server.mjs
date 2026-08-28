import { createReadStream, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize } from 'node:path'

const root = process.cwd()
const types = { '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml' }
const isFile = (file) => {
  try {
    return statSync(file).isFile()
  } catch {
    return false
  }
}

const server = createServer((request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname
  const requested = normalize(join(root, pathname))
  const file = pathname.startsWith('/src/') && isFile(requested) ? requested : join(root, 'index.html')
  const stream = createReadStream(file)
  stream.on('error', () => {
    if (response.headersSent) response.destroy()
    else response.writeHead(500).end()
  })
  stream.on('open', () => {
    response.writeHead(200, { 'Content-Type': `${types[extname(file)] || 'text/html'}; charset=utf-8` })
    stream.pipe(response)
  })
})

server.listen(5173, () => console.log('EasyRail is running at http://localhost:5173'))
