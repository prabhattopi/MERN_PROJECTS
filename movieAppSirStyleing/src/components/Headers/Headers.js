import React, { useState } from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
export const Headers = () => {

const [mobile, setMobile] = useState(false)



  return (
    <>
      <header>
        <div className="container flexSB">
          <nav className="flexSB">
            <div className="logo">
              <img src="https://www.freepnglogos.com/uploads/netflixm-logo-shadow-png-25.png" alt="" />
            </div>
            <ul className={mobile?"navMenu-list":"flexSB"} onClick={()=>setMobile(false)}>
             <Link to='/'>HOME</Link>
             <Link to='/series'>Series</Link>
             <Link to='/movies'>Movies</Link>
             <Link to='/pages'>Pages</Link>
             <Link to='/pricing'>Pricing</Link>
             <Link to='/contact'>Contact</Link>

            </ul>
            <button className='toggle'  onClick={()=>setMobile(!mobile)}>
              {mobile?<i className="fa fa-times"></i>:<i className="fa fa-bars"></i>}
             
            </button>
          </nav>
          <div className="account flexSB">
            <i className="fa fa-search"></i>
            <i className="fa fa-bell"></i>
            <i className="fa fa-users"></i>
            <button>Subscribe</button>
          </div>
        </div>
      </header>

    </>
  )
}
