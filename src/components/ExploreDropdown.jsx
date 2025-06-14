import React from "react";
import { Link } from "react-router"; // 
import { motion, AnimatePresence } from "framer-motion";

const ExploreDropdown = ({ data,animateState }) => {
  return (
    <AnimatePresence>
      {animateState && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
          className="Explore-links w-fit h-fit shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] p-[.8vw] bg-[#1E1C21] rounded-[1vw] absolute right-0 top-[4vw] flex flex-col gap-[.8vw] z-40"
        >
          {data.map(({ title, icon }, index) => (
            <Link
              key={index}
              className="text-[1.11vw] p-[.9vw] text-[#FCFAFF] flex items-center gap-[1vw]
              rounded-[.8vw] transition-colors duration-100 ease-in
              hover:bg-[#403a4a3e]"
            >
              <span className="icon">{icon}</span> {title}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExploreDropdown;
