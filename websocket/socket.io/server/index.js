import express from 'express'
import {createServer} from 'http'
import {Server} from 'socket.io'

const app = express();

const httpServer = createServer(app)

const io = new Server({httpServer})

io.on("connection", (socket) => {
    console.log("socket io is connected")
    console.log("what happen in behind of socket", socket)

    socket.on("chat", (payload) => {
        console.log("hidden think of payload", payload)
        io.emit("chat", payload)
    })
})

httpServer.listen(9191, () => {
    console.log("server is connected on port 9191...")
})