import React from 'react'
import { HomeCard } from './HomeCard'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const SmapleNextArrow=(props)=>{
  const {onClick}=props
  return (
  <div className='control-btn' onClick={onClick}>
    <button className='next'><i className='fa fa-chevron-right'></i></button>
  </div>
  )
}
const SmaplePrevArrow=(props)=>{
  const {onClick}=props
  return (
  <div className='control-btn' onClick={onClick}>
    <button className='prev'><i className='fa fa-chevron-left'></i></button>
  </div>
  )
}

export const Home = ({items}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<SmapleNextArrow/>,
    prevArrow:<SmaplePrevArrow/>,
    };
  return (
    <>
    <div className="homeContainer">
    <Slider {...settings}>
      {items.map((item)=>(
        <HomeCard key={item.id} item={item}/>

      ))}
        </Slider>
    </div>
    </>
  )
}
