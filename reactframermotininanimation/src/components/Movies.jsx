import React, { useContext, useState } from 'react'
import { MovieContext } from '../App'

import {motion} from "framer-motion"
const Movies = () => {
    const {filterdMovie}=useContext(MovieContext)

 
  return filterdMovie.map(movie=>(
    //put key in taht
    <motion.div key={movie.id} className="image-card"
    layout
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.5}}
    >
   
    <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
    <h2>{movie.title}</h2>
</motion.div>
  ))
}

export default Movies