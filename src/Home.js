import React from 'react'
import { useState,useEffect } from 'react'
import MovieList from './MovieList';
import loading from './loading.gif';
import useFetch from './usFetch';


const Home = () => {
  const {data: movies, ispending, error} = useFetch('http://localhost:8000/movies');
 
   
  
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {ispending && <div className='image'><img src={loading} alt="loading" /></div>}
      {movies && <MovieList Movies={movies} title="Movie's Blog!!!" />}
    </div>
  )
}

 export default Home
          
            
      