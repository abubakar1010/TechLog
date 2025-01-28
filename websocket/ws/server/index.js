import express from 'express'
import {WebSocketServer} from 'ws'
const app = express()
const port = 9191;

const server = app.listen(port, () => {
    console.log("Server is listening on prot", port)
})

const wss = new WebSocketServer({server});

wss.on("connection", (ws) => {
    ws.on("message",(data) => {
        console.log("Message from client %s", data)
        
        ws.send("Hey buddy! what's up")
    })
})