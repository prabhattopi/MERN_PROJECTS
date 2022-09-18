import React, { useContext } from 'react'
import { useState } from 'react'
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Search = () => {
  const [username,setUsername]=useState("")
  const [user,setUser]=useState(null)
  const [err,setErr]=useState(false)
const {currentUser}=useContext(AuthContext)
  const handleSearch=async()=>{
  const q=query(collection(db,"users"),where("displayName","==",username));

try{
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {

   setUser(doc.data())
  });
}
catch(err){
  setErr(true)
}

  }
  const handleKey=(e)=>{
    e.key==="Enter" && handleSearch()

  }

  const handleSelect=async()=>{
    //check Wheter the group is exist or not i mean (chats in fire) exists,if doesnot exist create new one
    const combinedId=currentUser.uid>user.uid?currentUser.uid+user.uid:user.uid+currentUser.uid;
    try{
      const res=await getDoc(doc(db,"chats",combinedId))
      if(!res.exists()){
        //create a chat in chats in collelctions

        await setDoc(doc(db,"chats",combinedId),{messages:[]});

        //create user chats

      await updateDoc(doc(db,"userChats",currentUser.uid),{
        [combinedId+".userInfo"]:{
          uid:user.uid,
          displayName:user.displayName,
          photoURL:user.photoURL
        },
        [combinedId+".date"]:serverTimestamp()

      });

      await updateDoc(doc(db,"userChats",user.uid),{
        [combinedId+".userInfo"]:{
          uid:currentUser.uid,
          displayName:currentUser.displayName,
          photoURL:currentUser.photoURL
        },
        [combinedId+".date"]:serverTimestamp()

      })
     


      }
    }
    catch(err){

    }

    setUser(null)
    setUsername("")

    //create user chats


    
  }
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='Find a User' value={username} onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} />
        </div>
        {err&&<span>User not Found</span>}
       {user&&<div className="userChat" onClick={handleSelect}>
            <img src={user.photoURL} alt="" />
            <div className="userChatInfo">
                <span>{user.displayName}</span>
            </div>
        </div>}
    </div>
  )
}

export default Search