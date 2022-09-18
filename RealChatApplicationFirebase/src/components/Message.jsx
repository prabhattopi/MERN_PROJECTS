import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsrsJnJbmJF-i2dVVicgslKXvLlRZznns6Q&usqp=CAU" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsrsJnJbmJF-i2dVVicgslKXvLlRZznns6Q&usqp=CAU" alt="" />
      </div>

    </div>
  )
}

export default Message