import React from 'react'

export const Ucard = ({item:{id,cover,name,time}}) => {
  return (
    <>
    <div className="MovieBox">
        <div className="img">
            <img src={cover} alt="" />

        </div>
        <div className="tex">
            <h3>{name}</h3>
            <span>{time}</span> <br />
            <button className='primary-btn'>
                <i className="fa fa-pla"></i>Play NoW
            </button>
        </div>
    </div>
    
    
    </>
  )
}
