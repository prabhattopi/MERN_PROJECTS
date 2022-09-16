const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const {getCurrentUser,userJoin,userLeave,getRoomUsers}=require("./utils/users")
const app = express();

const server = http.createServer(app);
const io = socketio(server);

//set Static folder

app.use(express.static(path.join(__dirname, "public")));
const botName="ChatCord bot"
//Run when client connects

io.on("connection", (socket) => {
socket.on("joinRoom",({username,room})=>{
    const user=userJoin(socket.id,username,room)

    socket.join(user.room)



  //Welcome the current User
  socket.emit("message",formatMessage(botName,"Welcome to ChatCord!"));

  //BroadCast when a user connects
  //emit everybody accepts users
socket.broadcast.to(user.room).emit("message",formatMessage(botName,`${user.username} has joined the Chat`));


//Send users and room info

io.to(user.room).emit("roomUsers",{
    room:user.room,
    users:getRoomUsers(user.room)
})

    })







  //Listen for chat message
  socket.on("chatMessage",(msg)=>{
      const user=getCurrentUser(socket.id)
     io.to(user.room).emit("message",formatMessage(`${user.username}`,msg))

  })

  
  //Runs when client Disconnects
  socket.on("disconnect", () => {

    const user=userLeave(socket.id)
    if(user){
  // io.emit() all the client
  io.to(user.room).emit("message",formatMessage(botName,`${user.username} has left the chat`));


  
  io.to(user.room).emit("roomUsers",{
    room:user.room,
    users:getRoomUsers(user.room)
})
    }

    //Send users and room info



    
  
});

  
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
