import * as Io from 'socket.io'
import { Server } from 'http'

import Message from '../Models/Message'

export function startSocket(server: Server, config: any): void {
  const io = Io(server, {})
  io.on('connection', (socket) => {
    socket.on('chat', async (value) => {
      try {
        await Message.create(JSON.parse(value))
        socket.emit('chat', value)
      } catch (err) {
        console.error(err)
      }
    })
  })
}
