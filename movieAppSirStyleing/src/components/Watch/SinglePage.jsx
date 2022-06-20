import React, { useState } from 'react'
import {useParams} from "react-router-dom"
import { Upcoming } from '../Upcoming/Upcoming'
import "./style.css"
export const SinglePage = () => {
    const {id}=useParams()
    const [item,setItem]=useState(null)
    useEffect(() => {
      let item=homeData.find((item)=>item.id===parseInt(id))
      if(item){
        setItem(item)
      }
    
    
    }, [id])
    const [rec,setrec]=useState(recomende)
  return (
    <>
    {item?(
        <>
        <section className='singlePage'>
            <div className="singleHeading">
                <h1>{item.name}</h1>
                <span> | {item.time} | </span>
                <span>HD</span>
            </div>
            <div className='container'>
                <video src={item.video} controls></video>
                <div className="para">
                    <h1>DAte: {item.date}</h1>
                    <p>{item.desc}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor minus saepe nulla quaerat voluptates ea, optio eos velit excepturi tempora quas itaque est tempore minima aperiam commodi nostrum quod.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolor minus saepe nulla quaerat voluptates ea, optio eos velit excepturi tempora quas itaque est tempore minima aperiam commodi nostrum quod.</p>
                </div>
                <div className="social">
                    <h3>Share :</h3>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </section>
        <Upcoming items={rec} title="Recommended Movies"/>
        </>
    ):null}
   

    </>
  )
}
