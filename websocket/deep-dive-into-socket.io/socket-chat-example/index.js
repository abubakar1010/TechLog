import express from 'express'
import {createServer} from 'http'
import {fileURLToPath} from 'url'
import {dirname,join} from 'path'
import {Server} from 'socket.io'
import mongoose, { model, Schema } from 'mongoose'

const app = express()
const port = 9191;

const httpServer =  createServer(app);

const io = new Server(httpServer,{
    connectionStateRecovery: {}
})
try {
    const connectionInstance = await mongoose.connect('mongodb://127.0.0.1:27017/chatDB');
    console.log("mongoose connected on host: ",connectionInstance.connection.host)
} catch (error) {
    console.log("Oops! connection failed",error)
}

const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    }
})

const Message = model("Message", messageSchema)

const __dirname = dirname(fileURLToPath(import.meta.url))

// console.log(dirname(fileURLToPath(import.meta.url)), fileURLToPath(import.meta.url))

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"))
})

io.on("connection", async(socket) => {
    console.log("a user is connected")
    socket.on("disconnect", () => {
        console.log("a user is disconnected")
    })
    socket.on("chat message", async(msg) => {
        let result;
        try {
            result = await Message.create({content: msg})
        } catch (error) {
            
        }
        console.log({message: msg})
        io.emit("chat message",msg, result._id )
    })
    if (!socket.recovered) {
        // if the connection state recovery was not successful
        try {
          const missedMessage = await Message.find({
            _id:{$gt: socket.handshake.auth.serverOffset || "000000000000000000000000"}
          })
          missedMessage.forEach(missedMsg => io.emit("chat message", missedMsg.content))
          console.log(missedMessage)
        } catch (e) {
          // something went wrong
          console.error('Error retrieving missed messages:', e);
        }
      }
})

httpServer.listen(port, () => {
    console.log("Server is listening on port ", port)
})