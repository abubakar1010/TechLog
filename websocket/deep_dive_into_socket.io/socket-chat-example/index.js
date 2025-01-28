import express from 'express'
import {createServer} from 'http'
import {fileURLToPath} from 'url'
import {dirname,join} from 'path'

const app = express()
const port = 9191;

const httpServer =  createServer(app);

const __dirname = dirname(fileURLToPath(import.meta.url))

// console.log(dirname(fileURLToPath(import.meta.url)), fileURLToPath(import.meta.url))

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "index.html"))
})

httpServer.listen(port, () => {
    console.log("Server is listening on port ", port)
})