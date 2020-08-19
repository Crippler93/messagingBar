import * as Io from 'socket.io'
import { Server } from 'http'

export function startSocket(server: Server, config: any): void {
  const io = Io(server, {})
  io.on('connection', (socket) => {
    console.log('New user connected')
    socket.emit('FromAPI', new Date())

    socket.on('chat', (value) => {
      console.log(value)
    })
  })
}
