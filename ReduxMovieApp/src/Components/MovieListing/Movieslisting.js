import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows, getAllMovies, getAllShows, onchan, onchanShow } from '../../Feautures/movies/movieSlice'
import { MoviesCard } from '../MovieCard/MoviesCard'
import "./MovieListing.scss"
export const Movieslisting = () => {
  const movies=useSelector(getAllMovies)
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
  <h2>Movies <span><input type="text" onChange={(e)=>{dispatch(onchan(e.target.value))
  dispatch(fetchAsyncMovies())
  
  }} /></span></h2>
 </div>
 <div className="movie-container">
  {renderMovies}
 </div>
 <div className="show-list">
  <h2>Shows <span><input type="text" onChange={(e)=>{dispatch(onchanShow(e.target.value))
  dispatch(fetchAsyncShows())
  
  }} /></span></h2>
 </div>
 <div className="movie-container">
  {renderShows}
 </div>

    </div>
  )
}
