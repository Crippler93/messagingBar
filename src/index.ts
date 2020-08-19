import { App } from './app'
import * as Server from 'http'
import { connect } from 'mongoose'
import { DB_URI, PORT } from './constants/envVariables'
import { startSocket } from './socket'

connect(DB_URI, { useNewUrlParser: true })

const app = new App().app
const server = Server.createServer(app)

startSocket(server, {})

server.listen(PORT, () => {
  console.log(`Server running of http://localhost:4000 🎉`)
})
