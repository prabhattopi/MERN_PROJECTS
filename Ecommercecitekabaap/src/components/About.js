import React from 'react'
import { NavLink } from 'react-router-dom'

export const About = () => {
  return (
    <div>

      <div className="container py-5 my-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary mb-4 fw-bold'>About us</h1>
            <p className='lead mb-4'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente iusto asperiores optio eveniet, sint illum ducimus necessitatibus odit doloribus aliquid pariatur harum voluptatum amet mollitia placeat blanditiis dolorum magnam quasi.
            </p>
            <NavLink to="/contact"className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <img src="https://www.whatmobile.com.pk/control/news/assets/19092020/7e2ded7a4fcc16523ae2064eeca3096c.jpg" className="d-block w-100" alt="Home" height="450px"/>
          </div>
        </div>

      </div>
    </div>
  )
}
