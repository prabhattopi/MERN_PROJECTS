
const chatForm = document.getElementById("chat-form");

const chatMessages=document.querySelector(".chat-messages")
const roomName=document.getElementById("room-name")
const userList=document.getElementById("users")
//Get username and room form URL

const {username,room}= Qs.parse(location.search,{
    ignoreQueryPrefix:true
});

// console.log(username,room)

const socket = io();

//Join chatroom
socket.emit("joinRoom",{username,room})

//get room and users

socket.on("roomUsers",({room,users})=>{
    OutputRoomName(room);
    OutputUsers(users)
})



//Message from server
socket.on("message", (message) => {
    console.log(message)
  outputMessage(message)

  //scroll Down
  chatMessages.scrollTop=chatMessages.scrollHeight;
});

//Message submit

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //Get message text
  const msg = e.target.elements.msg.value;

  //Emit a message to server
  socket.emit("chatMessage", msg);

  //Clear Input
  e.target.elements.msg.value="";
  e.target.elements.msg.focus();
});


//OUtput Message to DOM
function outputMessage(message){
    const div=document.createElement("div")
    div.classList.add("message")
    div.innerHTML=`	<p class="meta">${message.username}  <span>${message.time}</span></p>
    <p class="text">
       ${message.text}
    </p>`

    document.querySelector(".chat-messages").appendChild(div);

}


//Addd room name to Dom

function OutputRoomName(room){
roomName.innerText=room;
}

function OutputUsers(users){
    userList.innerHTML=`
    ${users.map(user=>`<li>${user.username}</li>`).join(" ")}
    `
}