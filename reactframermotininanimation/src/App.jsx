import { useState } from 'react'
import ButtonFilter from './components/ButtonFilter'
import Movies from './components/Movies'


import { useEffect } from 'react'
import { createContext } from 'react'
import { AnimatePresence } from 'framer-motion'


//Create Context

export const MovieContext=createContext()


function App() {
  const [popularMovie,setPopularMovie]=useState([])
  const [filterdMovie,setFiltered]=useState([])

    const getchPopularMovie=async()=>{
        const response=await fetch(`
        https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
      
        const movies=await response.json()
        setPopularMovie(movies.results)
        setFiltered(movies.results)
    }
  useEffect(()=>{
  getchPopularMovie()
  return ()=>getchPopularMovie
  },[])


  const value={
    popularMovie,
    filterdMovie,
    setFiltered

  }


  return (
    <MovieContext.Provider value={value}>
    <div className="app">
    <ButtonFilter/>
    <div className='image-container'>
      <AnimatePresence>
      <Movies/>
      </AnimatePresence>
    
    </div>
    </div>
  </MovieContext.Provider>
   
  )
}

export default App
