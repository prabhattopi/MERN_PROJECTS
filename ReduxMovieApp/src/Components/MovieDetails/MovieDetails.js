
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
import { fetchAsyncMoviesOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../Feautures/movies/movieSlice'
import "./MovieDetails.scss"
export const MovieDetails = () => {
 const {imdbID} =useParams()
 const dispatch=useDispatch()
 const data=useSelector(getSelectedMovieOrShow)
 useEffect(() => {
   dispatch(fetchAsyncMoviesOrShowDetail(imdbID))

   return ()=>{
    dispatch(removeSelectedMovieOrShow())
   }
 
  
 }, [dispatch,imdbID])
 
  return (
    <div className='movie-section'>
      {Object.keys(data).length==0?
      <div className='circle'>
        <div></div>
      </div>:
      
      <>

      <div className="section-left">
        <div className="movie-title">
          {data.Title}
        </div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className='fa fa-star'></i> :{data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className='fa fa-thumbsup'></i> :{data.imdbVotes}
          </span>
          <span>
            Runtime <i className='fa fa-film'></i> :{data.imdbRuntime}
          </span>
          <span>
            Year <i className='fa fa-calendar'></i> :{data.imdbYear}
          </span>
        </div>
      
    <div className="movie-plot">
      {data.Plot}
    </div>
    <div className="movie-info">
      <div>
        <span>
          Director
        </span>
        <span>
         {data.Director}
        </span>
    </div>
      <div>
        <span>
          Stars
        </span>
        <span>
         {data.Actors}
        </span>
    </div>
      <div>
        <span>
          Generes
        </span>
        <span>
         {data.Genre}
        </span>
      </div>
 
      <div>
        <span>
          Languages
        </span>
        <span>
         {data.Language}
        </span>
      </div>

      <div>
        <span>
          Awards
        </span>
        <span>
         {data.Awards}
        </span>
      </div>
    </div>
    </div>
   
   
 <div className="section-right">
  <img src={data.Poster} alt={data.title} />
 </div>
 </>
}
    </div>
  )
}
