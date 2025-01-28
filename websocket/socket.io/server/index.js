import express from 'express'
import {createServer} from 'http'
import { nanoid } from 'nanoid';
import {Server} from 'socket.io'

const app = express();

const httpServer = createServer(app)

const io = new Server(httpServer, {cors:{
    origin: "*"
}})

const user = [
    "Rayhan", "Abdullah", "Emon", "Rohan", "Mehadi", "Abu Bakar", "Ritu", "Sumaya", "Sharna"]

io.on("connection", (socket) => {
    console.log("socket io is connected")
    console.log("what happen in behind of socket", socket)

    socket.on("chat", (payload) => {
        console.log("hidden think of payload", payload)
        io.emit("chat", [{...payload.newMessage}])
    })
})

httpServer.listen(9191, () => {
    console.log("server is connected on port 9191...")
})