import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo">Prabaht ki Gossips</span>
        <div className='user'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsrsJnJbmJF-i2dVVicgslKXvLlRZznns6Q&usqp=CAU" alt="" />
        <span>John</span>
        <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar