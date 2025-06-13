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
import ImageIcon from "../icons/ImageIcon";
import VideoIcon from "../icons/VideoIcon";
import { motion, AnimatePresence } from "framer-motion";

import UserDropdropdown from "./UserDropdropdown";
const Navbar = () => {
  const [ShowExploreDropdown, setExploreShowDropDown] = useState(false);
  const [ShowDropDown, SetShowDropDown] = useState(false);
  const [NotificationDropdown, setNotificationDropdown] = useState(false);
  const [formatDropdownShow, setformatDropdownShow] = useState(false);
  const [format,setformat] = useState("");

  const formatHandler = (e)=>{
    let format = e.target.innerText
    console.log(e.target.innerText);
    setformat(format);
  }
  return (
    <>
      <div className="w-full h-[11vh] relative pl-[2vw] pr-[2vw] flex flex-row items-center justify-between text-[#FCFAFF] ">
        <div className="navigation-area   relative flex items-baseline gap-[4vw] justify-center h-fit">
          <span className="logo text-[1.7vw]">FlickStack.</span>
          <Link to="/">Home</Link>
          <Link
            to="/Explore"
            className={`flex items-center justify-center ${
              ShowExploreDropdown ? "bg-[#1E1C21]" : ""
            } rounded-[1.6vw] pl-[1vw] p-[.5vw]`}
            onMouseOver={() => setExploreShowDropDown(true)}
            onMouseOut={() => setExploreShowDropDown(false)}
          >
            Explore
            <motion.span
              className=" w-fit h-fit p-0"
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
        <div
          className="search-box flex items-center justify-center   relative h-fit cursor-pointer transition-all duration-450 ease-in-out
 hover:bg-[#1E1C21]  p-[.8vw] rounded-full mr-[12vw]"
        >
          <div
            className="absolute -inset-[5px] rounded-[1vw] blur-xl opacity-50 z-0
      
      hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-600 ease-in-out 
    "
          ></div>
          <span className="search-btn cursor-pointer">
            <SearchIcon size="text-[1.8vw]"></SearchIcon>
          </span>

          <div className="search-panel-wrapper absolute top-[4.5vw] w-[45vw] h-fit ">
            <div className="input-wrapper h-fit flex items-center flex-row gap-[.5vw] bg-[#1E1C21] p-[.5vw]  rounded-[1vw]">
              <div
                onMouseOver={() => setformatDropdownShow(true)}
                onMouseOut={() => setformatDropdownShow(false)}
                className="selection-box relative hover:bg-[#403a4a3e] flex items-center justify-center rounded-[1vw] w-[16.5vw] h-[7.5vh] "
              >
                <h2 className="flex items-center gap-[.7vw]">
                  <span>
                    <ImageIcon
                      size="text-[1.7vw]"
                      color="text-[#D8C1FF]"
                    ></ImageIcon>
                  </span>
                  Photos
                  <motion.span
                    animate={{ rotate: formatDropdownShow ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DropdownIcon size="text-[2vw]"></DropdownIcon>
                  </motion.span>
                </h2>
                <AnimatePresence>
                  {formatDropdownShow && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.2 },
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                        transition: { duration: 0.2 },
                      }}
                      className="format-selection p-[.5vw]  bg-[#1E1C21] absolute  top-[4.8vw] left-0 rounded-[1vw] w-fit h-fit"
                    >
                      <Link onClick={formatHandler}
                        className="text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex items-center gap-[1.7vw]
              rounded-[.8vw] transition-colors duration-100 ease-in
              hover:bg-[#403a4a3e]"
                      >
                        <span>
                          <ImageIcon
                            size="text-[1.7vw]"
                            color="text-[#D8C1FF]"
                          ></ImageIcon>
                        </span>
                        Photos
                      </Link>
                      <Link onClick={formatHandler}
                        className="text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex items-center gap-[1.7vw]
              rounded-[.8vw] transition-colors duration-100 ease-in
              hover:bg-[#403a4a3e]"
                      >
                        <span>
                          <VideoIcon
                            size="text-[1.7vw]"
                            color="text-[#D8C1FF]"
                          ></VideoIcon>
                        </span>
                        Videos
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <input
                type="text"
                placeholder="Something in mind type here ?"
                className="search-bar rounded-[1vw] w-full h-[7.5vh] border  p-[1.5vw] outline-0 "
              />
              <button className="bg-[#1E1C21] border w-[6vw] h-[7.5vh] rounded-[1vw] "></button>
            </div>
          </div>
        </div>

        <div className="user-navigation h-fit flex relative gap-[2vw] items-center justify-center">
          <ChatIcon size="text-[1.8vw]"></ChatIcon>
          <div
            className={`relative cursor-pointer ${
              NotificationDropdown ? "bg-[#1E1C21] " : ""
            } p-[.9vw] rounded-full`}
            onMouseOver={() => setNotificationDropdown(true)}
            onMouseOut={() => setNotificationDropdown(false)}
          >
            <BellIcon size="text-[1.8vw] cursor-pointer"></BellIcon>
            <NotificationDropdropdown
              animateState={NotificationDropdown}
            ></NotificationDropdropdown>
          </div>

          <div
            className="relative"
            onMouseOver={() => SetShowDropDown(true)}
            onMouseOut={() => SetShowDropDown(false)}
          >
            <div
              className={`absolute -inset-[5px] rounded-[1vw] blur-xl opacity-50 z-0
      
      ${
        ShowDropDown
          ? "bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-600 ease-in-out"
          : ""
      }
    `}
            ></div>
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
