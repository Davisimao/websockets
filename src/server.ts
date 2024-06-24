import express from "express"
import { createServer } from "node:http"
import { Server } from "socket.io"
const fistmessage = { username: "Admin", content: "welcome to my chat!" }
const messagesdataBase = [fistmessage]

const app = express()

const server = createServer(app)
const io = new Server(server)

app.use(express.static("public"))
app.get("/messages", (req, res) => {
  res.json(messagesdataBase)
})

io.on("connection", (socket) => {
  console.log(`Usuário conectado: ${socket.id}`)

  socket.on("disconnect", () => {
    console.log(`Usuário ${socket.id} desconectado!`)
  })
})



server.listen(3000, () => {
  console.log("iniciando no https://localhost:3000")
})