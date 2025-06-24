import React from 'react'
import { useState,useEffect } from 'react'
import MovieList from './MovieList';


const Home = () => {
  const [Movies, Setmovies] = useState

   
  useEffect(()=>{
   fetch('http://localhost:8000/movies')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data)
      SetMovies(data)
    })
  }, [])

    
  return (
    <div className='home'>
     {movies && <MovieList Movies = {movies} title = "Movie's Blog!!!"/> }
      
      </div>
  )
}

export default Home
          
            
          