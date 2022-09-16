const users=[]

//Join user to chat

function userJoin(id,username,room){
    const user={id,username,room}

    users.push(user)
    return user
}

//User Leave Chats
function userLeave(id){
    const index=users.findIndex(user=>user.id===id)
    if(index!=-1){
        return users.splice(index,1)[0]
    }
}

//Get room Users

function getRoomUsers(room){

    return users.filter(user=>user.room===room)

}

//Get current user

function getCurrentUser(id){
    return users.find(user=>user.id===id)
}

module.exports={getCurrentUser,userJoin,userLeave,getRoomUsers}