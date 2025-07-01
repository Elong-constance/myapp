import React from 'react'
import {Link} from React-router-dom;
const navbar = () => {
  return (
    <div className='navbar'>
        <h1>My_Movies</h1>
        <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        </div>
        </div>
  )
}
    
    export default Navbar
