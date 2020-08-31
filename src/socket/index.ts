import * as Io from 'socket.io'
import { Server } from 'http'

export function startSocket(server: Server, config: any = {}): void {
  const io = Io(server, config)
  io.on('connection', (socket) => {
    socket.on('chat', async (value) => {
      try {
        // TODO: Move model logic on different files and update here
        // await Message.create(JSON.parse(value))
        io.emit('chat', value)
      } catch (err) {
        console.error(err)
      }
    })
  })
}
