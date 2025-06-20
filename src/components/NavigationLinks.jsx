import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import DiscoverIcon from "../icons/DiscoverIcon";
import TrendingIcon from "../icons/TrendingIcon";
import LikeIcon from "../icons/LikeIcon";
import UserPrefrenceIcon from "../icons/UserPrefrenceIcon";
import ExploreDropdown from "./ExploreDropdown";
import DropdownIcon from "../icons/DropdownIcon";

const NavigationLinks = ({ showExplore, setShowExplore }) => {
  const exploreLinks = [
    {
      title: "Discover Photos",
      icon: <DiscoverIcon size="text-[1.7vw]" color="text-[#D8C1FF]" />,
      direct: "/Explore"
    },
    {
      title: "Trending Now",
      icon: <TrendingIcon size="text-[1.7vw]" color="text-[#D8C1FF]" />,
      direct: "/Trending"
    },
    {
      title: "Most Liked",
      icon: <LikeIcon size="text-[1.7vw]" color="text-[#D8C1FF]" />,
      direct:"/MostLiked"
    },
    {
      title: "Based on Your Likes",
      icon: <UserPrefrenceIcon size="text-[1.7vw]" color="text-[#D8C1FF]" />,
      direct:"/YouLiked"
    },
  ];

  return (
    <div className="navigation-area relative flex items-baseline gap-[4vw] justify-center h-fit">
      <span className="logo text-[1.7vw]">FlickStack.</span>
      <Link to="/">Home</Link>
      <Link
      
        className={`flex items-center justify-center ${
          showExplore ? "bg-[#1E1C21]" : ""
        } rounded-[1.6vw] pl-[1vw] p-[.5vw]`}
        onMouseOver={() => setShowExplore(true)}
        onMouseOut={() => setShowExplore(false)}
      >
        Explore
        <motion.span
          className="w-fit h-fit p-0"
          animate={{ rotate: showExplore ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <DropdownIcon size="text-[2vw]" />
        </motion.span>
        <ExploreDropdown animateState={showExplore} data={exploreLinks} />
      </Link>
    </div>
  );
};

export default NavigationLinks;
