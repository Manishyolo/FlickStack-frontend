import React from 'react'
import { Link } from 'react-router'
import SearchIcon from '../icons/SearchIcon'
import BellIcon from '../icons/BellIcon'
import ChatIcon from '../icons/ChatIcon'
import DropdownIcon from '../icons/DropdownIcon'
import DiscoverIcon from '../icons/DiscoverIcon'
import TrendingIcon from '../icons/TrendingIcon'
import LikeIcon from '../icons/LikeIcon'


const Navbar = () => {
  return (
    <div className='w-full h-[11vh]  pl-[2vw] pr-[2vw] flex flex-row items-center justify-between text-[#FCFAFF] '>

      <div className="navigation-area   relative flex items-baseline gap-[4vw] justify-center h-fit">
         <span className='logo text-[1.7vw]'>FlickStack.</span> 
         <Link to="/">Home</Link>
         <Link to="/Explore" className='flex'>Explore<span><DropdownIcon size="text-[2vw]"></DropdownIcon></span></Link>
          
          <div className="Explore-links w-fit h-fit p-[1vw] bg-[#1E1C21] rounded-md  absolute right-0 top-[3vw] flex flex-col gap-[1vw]">
             <Link className='text-[1vw] text-[#D8C1FF] flex items-center gap-[1vw]'><span className='icon'><DiscoverIcon></DiscoverIcon></span> Discover Photos</Link>
             <Link className='text-[1vw] text-[#D8C1FF] flex items-center gap-[1vw]'><span><TrendingIcon></TrendingIcon></span>Trending Now</Link>
             <Link className='text-[1vw] text-[#D8C1FF] flex gap-[1vw] items-center'><span><LikeIcon></LikeIcon></span>Most Liked</Link>
             <Link className='text-[1vw] text-[#D8C1FF]'>Based on Your Likes</Link>
          </div>
           
      </div>
       <div className="search-box h-fit mr-[12vw]">
         <span className='search-btn cursor-pointer'>
          <SearchIcon size="text-[1.8vw]"></SearchIcon>
         </span>
         
       </div>
       
       <div className="user-navigation h-fit flex gap-[2vw] items-center justify-center">
                  <ChatIcon size="text-[1.8vw]"></ChatIcon>
                <BellIcon size="text-[1.8vw]"></BellIcon>
                <div className="w-[3.4vw] h-[3.4vw] overflow-hidden rounded-[1vw] user-profile">
                  <img src="https://avatars.githubusercontent.com/u/113233807?v=4" className='w-full h-full object-cover' alt="" />
                </div>
       </div>
    </div>
  )
}

export default Navbar