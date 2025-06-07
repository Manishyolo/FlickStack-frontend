import React from "react";
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
import UserCollectionIcon from "../icons/UserCollectionIcon";
import UserIcon from "../icons/UserIcon";
import SettingIcon from "../icons/SettingIcon";
import LogoutIcon from "../icons/LogoutIcon";
const Navbar = () => {

  
  return (
    <div className="w-full h-[11vh]  pl-[2vw] pr-[2vw] flex flex-row items-center justify-between text-[#FCFAFF] ">
      <div className="navigation-area   relative flex items-baseline gap-[4vw] justify-center h-fit">
        <span className="logo text-[1.7vw]">FlickStack.</span>
        <Link to="/">Home</Link>
        <Link to="/Explore" className="flex">
          Explore
          <span>
            <DropdownIcon size="text-[2vw]"></DropdownIcon>
          </span>
          <ExploreDropdown
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
      <div className="search-box h-fit mr-[12vw]">
        <span className="search-btn cursor-pointer">
          <SearchIcon size="text-[1.8vw]"></SearchIcon>
        </span>
      </div>

      <div className="user-navigation h-fit flex relative gap-[2vw] items-center justify-center">
        <ChatIcon size="text-[1.8vw]"></ChatIcon>
        <BellIcon size="text-[1.8vw]"></BellIcon>
        <div className="w-[3.4vw] h-[3.4vw] cursor-pointer overflow-hidden relative rounded-[1vw] user-profile">
          <img
            src="https://avatars.githubusercontent.com/u/113233807?v=4"
            className="w-full h-full object-cover"
            alt=""
          />
         
        </div>
         <div className="user-panel bg-[#1E1C21] p-[.8vw] rounded-[1vw] absolute top-[4.5vw] right-0 w-fit h-fit  flex flex-col gap-[.8vw]">
                      <Link className="whitespace-nowrap text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex flex-row items-center gap-[1vw]
             rounded-[.8vw] transition-colors duration-100 ease-in
             hover:bg-[#403a4a3e]">
              <span>
 <UserIcon  size="text-[1.7vw]"
                    color="text-[#D8C1FF]"></UserIcon>
              </span>
               
              Your Profile
             </Link>
                    <Link className="whitespace-nowrap text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex flex-row items-center gap-[1vw]
             rounded-[.8vw] transition-colors duration-100 ease-in
             hover:bg-[#403a4a3e]">
              <span>
                <UserCollectionIcon size="text-[1.7vw]"
                    color="text-[#D8C1FF]"></UserCollectionIcon>
              </span>
              Your Collections
             </Link>
              <Link className="whitespace-nowrap text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex flex-row items-center gap-[1vw]
             rounded-[.8vw] transition-colors duration-100 ease-in
             hover:bg-[#403a4a3e]">
              <span>
               <SettingIcon size="text-[1.7vw]"
                    color="text-[#D8C1FF]"></SettingIcon>
              </span>
              Settings
             </Link>
              <Link className="whitespace-nowrap text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex flex-row items-center gap-[1vw]
             rounded-[.8vw] transition-colors duration-100 ease-in
             hover:bg-[#403a4a3e]">
              <span>
               <LogoutIcon size="text-[1.7vw]"
                    color="text-[#D8C1FF]" ></LogoutIcon>
              </span>
              Logout
             </Link>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
