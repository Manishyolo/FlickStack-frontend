import React from "react";
import { Link } from "react-router";
const ExploreDropdown = ({data}) => {
    console.log(data);
    
  return (
    <>
      <div className="Explore-links w-fit h-fit p-[.8vw] bg-[#1E1C21] rounded-[1vw]  absolute right-0 top-[3.5vw] flex flex-col gap-[.8vw]">
          {data.map(({title,icon},index)=>
         <Link key={index} className="text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex items-center gap-[1vw]
             rounded-[.8vw] transition-colors duration-100 ease-in
             hover:bg-[#403a4a3e]">
          <span className="icon">
           {icon}
          </span> {`${title}`}
        </Link>
         
        )} 
      </div>
    </>
  );
};

export default ExploreDropdown;
