import React from 'react'
import { Link } from 'react-router'
import SearchIcon from '../icons/SearchIcon'
const Navbar = () => {
  return (
    <div className='w-full h-[9vh] border-2 pl-[1vw] pr-[1vw] text-[#FCFAFF] '>

      <div className="navigation-area">
         <span className='logo '>FlickStack.</span> 
         <Link to="/">Home</Link>
         <Link to="/Explore">Explore</Link>
      </div>
       <div className="search-box">
         <span className='search-btn'>
          <SearchIcon></SearchIcon>
         </span>
       </div>
       
    </div>
  )
}

export default Navbar