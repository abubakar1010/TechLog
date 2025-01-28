import express from 'express'
import {createServer} from 'http'
import {fileURLToPath} from 'url'
import {dirname,join} from 'path'
import {Server} from 'socket.io'

const app = express()
const port = 9191;

const httpServer =  createServer(app);

const io = new Server(httpServer)

const __dirname = dirname(fileURLToPath(import.meta.url))

// console.log(dirname(fileURLToPath(import.meta.url)), fileURLToPath(import.meta.url))

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"))
})

io.on("connection", (socket) => {
    console.log("a user is connected")
    socket.on("disconnect", () => {
        console.log("a user is disconnected")
    })
    socket.on("chat message", (msg) => {
        console.log({message: msg})
    })
})

httpServer.listen(port, () => {
    console.log("Server is listening on port ", port)
})