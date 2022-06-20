import React from 'react'
import {Link} from "react-router-dom"

export const HomeCard = ({item:{id,cover,name,rating,time,desc,starring,generes,tags,video}}) => {
  return (
    <>
     <div className="box">
        <div className="coverImages">
            <img src={cover} alt="" />
        </div>
        <div className="content flex">
            <div className='detial row'>
            <h1>{name}</h1>
            <div className="rating flex">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
            </div>
            <label htmlFor="">{rating}</label>
            <span>GP</span>
            <label>{time}</label>

       <p>{desc}</p>
       <div className="cast">
        <h4><span>
          Starring
        </span>
        {starring}
        </h4>
        <h4><span>
          Generes
        </span>
        {generes}
        </h4>
        <h4><span>
          Tags
        </span>
        {tags}
        </h4>
       
        </div>
        <button className='primary-btn'>
        <i className='fa fa-play'></i>Play NOW
       </button>
       </div>
     
       <div className="playButton row">
        <Link to={`/singlepage/${id}`}>
            <button className=''>
                <div className="img">
                    <img src="https://www.freepnglogos.com/uploads/play-button-png/red-play-button-icon-icons-15.png"alt="" />
                   
                  
                </div>
                WATCH TRALER
            </button>
        </Link>
       </div>
     </div>
     </div>
    </>
  )
}
