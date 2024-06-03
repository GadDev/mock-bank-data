import jsonServer from 'json-server'
// const cors = require('cors')
// const path = require('path')

const server = jsonServer.create()
// const router = jsonServer.router(path.join(__dirname, 'db.json'))
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// server.use(cors())
// server.use(jsonServer.bodyParser)
server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
}))
server.use(router)

const PORT = 3000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})

// Export the Server API
export default server