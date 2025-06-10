  import React, { useState } from "react";
  import { Link } from "react-router";
  import SearchIcon from "../icons/SearchIcon";
  import BellIcon from "../icons/BellIcon";
  import ChatIcon from "../icons/ChatIcon";
  import DropdownIcon from "../icons/DropdownIcon";
  import DiscoverIcon from "../icons/DiscoverIcon";
  import TrendingIcon from "../icons/TrendingIcon";
  import LikeIcon from "../icons/LikeIcon";
  import UserPrefrenceIcon from "../icons/UserPrefrenceIcon";
  import ExploreDropdown from "./ExploreDropdown";
  import NotificationDropdropdown from "./NotificationDropdropdown";
  import { motion } from "framer-motion";


  import UserDropdropdown from "./UserDropdropdown";
  const Navbar = () => {
    const [ShowExploreDropdown, setExploreShowDropDown] = useState(false);
    const [ShowDropDown, SetShowDropDown] = useState(false);
    const [NotificationDropdown,setNotificationDropdown] = useState(false);

    return (
      <>
      
      
    
      <div className="w-full h-[11vh] relative   pl-[2vw] pr-[2vw] flex flex-row items-center justify-between text-[#FCFAFF] ">
        <div className="navigation-area   relative flex items-baseline gap-[4vw] justify-center h-fit">
          <span className="logo text-[1.7vw]">FlickStack.</span>
          <Link to="/">Home</Link>
          <Link
            to="/Explore"
            className={`flex items-center justify-center ${ShowExploreDropdown ? "bg-[#1E1C21]" : ""} rounded-[1.6vw] pl-[1vw] p-[.5vw]`}
            onMouseOver={() => setExploreShowDropDown(true)}
            onMouseOut={() => setExploreShowDropDown(false)}
          >
            Explore
            <motion.span className=" w-fit h-fit p-0"
              animate={{ rotate: ShowExploreDropdown ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <DropdownIcon size="text-[2vw]"></DropdownIcon>
            </motion.span>
            <ExploreDropdown
              animateState={ShowExploreDropdown}
              data={[
                {
                  title: "Discover Photos",
                  icon: (
                    <DiscoverIcon
                      size="text-[1.7vw]"
                      color="text-[#D8C1FF]"
                    ></DiscoverIcon>
                  ),
                },
                {
                  title: "Trending Now",
                  icon: (
                    <TrendingIcon
                      size="text-[1.7vw]"
                      color="text-[#D8C1FF]"
                    ></TrendingIcon>
                  ),
                },
                {
                  title: "Most Liked",
                  icon: (
                    <LikeIcon
                      size="text-[1.7vw]"
                      color="text-[#D8C1FF]"
                    ></LikeIcon>
                  ),
                },
                {
                  title: "Based on Your Likes",
                  icon: (
                    <UserPrefrenceIcon
                      size="text-[1.7vw]"
                      color="text-[#D8C1FF]"
                    ></UserPrefrenceIcon>
                  ),
                },
              ]}
            ></ExploreDropdown>
          </Link>
        </div>
        <div className="search-box   relative h-fit cursor-pointer transition-all duration-450 ease-in-out
 hover:bg-[#1E1C21]  p-[.8vw] rounded-full mr-[12vw]">
             <div  className="absolute -inset-[5px] rounded-[1vw] blur-xl opacity-50 z-0
      
      hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-600 ease-in-out 
    "></div>
          <span className="search-btn cursor-pointer"> 
            <SearchIcon size="text-[1.8vw]"></SearchIcon>
          </span>
         
        </div>

        <div className="user-navigation h-fit flex relative gap-[2vw] items-center justify-center">
          <ChatIcon size="text-[1.8vw]"></ChatIcon>
          <div className={`relative cursor-pointer ${NotificationDropdown ? "bg-[#1E1C21] ":""} p-[.9vw] rounded-full`} onMouseOver={()=>setNotificationDropdown(true)} onMouseOut={()=>setNotificationDropdown(false)}>
    <BellIcon size="text-[1.8vw] cursor-pointer">
          </BellIcon>
          <NotificationDropdropdown animateState={NotificationDropdown}></NotificationDropdropdown>
          </div>
        
          <div
            className="relative"
            onMouseOver={() => SetShowDropDown(true)}
            onMouseOut={() => SetShowDropDown(false)}
          >
            <div  className={`absolute -inset-[5px] rounded-[1vw] blur-xl opacity-50 z-0
      
      ${ShowDropDown ? "bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-600 ease-in-out" : ""}
    `}></div>
            <div className="w-[3.4vw] h-[3.4vw] cursor-pointer overflow-hidden relative rounded-[1vw] user-profile">
              <img
                src="https://avatars.githubusercontent.com/u/113233807?v=4"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <UserDropdropdown
              onMouseOver={() => SetShowDropDown(true)}
              animateState={ShowDropDown}
            ></UserDropdropdown>
          </div>
        </div>
      </div>
               
      </>
    );
  };

  export default Navbar;
