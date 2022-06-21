
import React,{useEffect} from 'react'
import { MovieDetails } from '../MovieDetails/MovieDetails'
import { Movieslisting } from '../MovieListing/Movieslisting'

import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../Feautures/movies/movieSlice'
import { movieText } from '../../Feautures/movies/movieSlice'
import { showText } from '../../Feautures/movies/movieSlice'
export const Home = () => {


  const dispatch=useDispatch()




  useEffect(() => {
    
  

  dispatch(fetchAsyncMovies(movieText));
  dispatch(fetchAsyncShows(showText));
    
    
  }, [dispatch])
  
  return (
    <>
    <div className='banner-img'>

   
    </div>
    <Movieslisting/>
    </>
    
  )
}
