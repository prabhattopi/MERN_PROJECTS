import React from 'react'
import { Product } from './Product'

export const Home = () => {
  return (
    <>
    <div id="carouselExampleDark" className="carousel slide" data-bs-ride="true">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div className="carousel-inner mt-1">
      <div className="carousel-item active">
        <img src="https://www.whatmobile.com.pk/control/news/assets/19092020/7e2ded7a4fcc16523ae2064eeca3096c.jpg" className="d-block w-100" alt="Home" height="500px"/>
      </div>
      <div className="carousel-item">
        <img src="https://images.news18.com/ibnlive/uploads/2021/04/1618895227_vivo_v21_5g.jpg" className="d-block w-100" alt="Mobile" height="500px"/>
      </div>
      <div className="carousel-item">
        <img src="https://www.businessinsider.in/photo/83300711/sara-ali-khan-to-be-the-brand-ambassador-for-the-upcoming-vivo-y-series.jpg?imgsize=956761" className="d-block w-100" alt="Shop Now" height="500px"/>
      </div>
      <div className="carousel-item">
        <img src="https://i.ytimg.com/vi/btSnuY3cPPI/maxresdefault.jpg" className="d-block w-100" alt="Tobile" height="500px"/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <Product/>
  </>
  )
}
