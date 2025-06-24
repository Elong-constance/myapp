import React from 'react'
import { useState } from 'react'
import MovieList from './MovieList';


const Home = () => {
  const [Movies, Setmovies] = useState([
    {title: "commando", body: "Action & Adventure Movies", actor: "Alnold", id:1},
    {title: "Predator", body: "Action & Adventure & Herror Movie", actor: "Arnold,", id:2},
    {title: "Tom Raider", body: "Action & Adventure Movie", actor: "Lara Croft", id:3},

  ])
  return (
    <div className='home'>
        <MovieList Movies = {movies} title = "Movies Blog!!!"/> 
       {/* trying to output Arnold Movies */}
       <MovieList Movies={Movies.filter((movie)=>{
        if(Movies.actor =="Arnord"){
          return true
        }
      })} title = "Arnold's Movies"/>
      </div>
  )
}
export default Home
          
            
          