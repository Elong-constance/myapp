import React from 'react'

const MovieList = ({movies, title}) => {
  return (
    <div className='blog-list'>
        <h2>{title}</h2>
        {movies.map((movie)=>(
            <div className="blog-preview" key={movie.id}>
                <h2>{movie.title}</h2>
                <p>Acted By:{movie.actor}</p>
                <button onClick={()=>handleDelete(movie.id)}>Delete movie</button>
            </div>

        ))}
    </div>

  )
  }

export default MovieList