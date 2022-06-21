import React from 'react'
import Slider from "react-slick"
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows, getAllLoader, getAllMovies, getAllShows, onchan, onchanShow } from '../../Feautures/movies/movieSlice'
import { MoviesCard } from '../MovieCard/MoviesCard'
import {Settings} from "../../CommonFolder/settings"
import "./MovieListing.scss"
export const Movieslisting = () => {


   












  const movies=useSelector(getAllMovies)
  const loading=useSelector(getAllLoader)
  const shows=useSelector(getAllShows)
  const dispatch=useDispatch()
  let renderMovies="";
  renderMovies=movies.Response==="True"?(movies.Search.map((movie,index)=>(
  
    <MoviesCard key={index} data={movie}/>
  ))):(<div className="error"><h3 style={{color:"white"}}>movies.ERoor</h3></div>)






  let renderShows="";
  renderShows=shows.Response==="True"?(shows.Search.map((movie,index)=>(
  <MoviesCard key={index} data={movie}/>
  ))):(<div className="error"><h3 style={{color:"white"}}>movies.ERoor</h3></div>)









  return (
    <div className='movie-wrapper'>
 <div className="movie-list">
  <h2>Movies <span><input type="text" onChange={(e)=>{

  dispatch(fetchAsyncMovies(e.target.value))
  
  }} /></span></h2>
 </div>
 <div className="movie-container">
  
 {loading? <div className='circle'>
        <div></div>
      </div>:
 <Slider {...Settings}>

  {renderMovies}
  </Slider>
}
 </div>
 <div className="show-list">
  <h2>Shows <span><input type="text" onChange={(e)=>{

  dispatch(fetchAsyncShows(e.target.value))
  
  }} /></span></h2>
 </div>
 <div className="movie-container">
  
 {loading? <div className='circle'>
        <div></div>
      </div>:
  
 <Slider {...Settings}>
  {renderShows}
  </Slider>
}
 </div>

    </div>
  )
}
