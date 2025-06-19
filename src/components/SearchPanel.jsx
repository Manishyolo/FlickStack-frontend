import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import SearchIcon from "../icons/SearchIcon";
import DropdownIcon from "../icons/DropdownIcon";
import ImageIcon from "../icons/ImageIcon";
import VideoIcon from "../icons/VideoIcon";
import CancelIcon from "../icons/CancelIcon";

const SearchPanel = ({
  showSearchPanel,
  setShowSearchPanel,
  formatDropdownShow,
  setFormatDropdownShow,
  format,
  formatHandler,
}) => {
  return (
    <>
      <div
        className={`search-box flex items-center justify-center w-fit  relative h-fit cursor-pointer transition-all duration-450 ease-in- ${
          showSearchPanel ? "bg-[#1E1C21]" : ""
        }
 hover:bg-[#1E1C21]   rounded-full mr-[12vw]`}
      >
        <div
          className={`absolute -inset-[5px] rounded-[1vw] blur-xl opacity-50 z-0
      
            ${
              showSearchPanel
                ? "bg-gradient-to-r from-purple-500 to-pink-500"
                : ""
            }  transition-all duration-600 ease-in-out 
    `}
        ></div>

        {showSearchPanel ? (
          <span
            className="close-btn z-50 p-[.8vw] rounded-full"
            onClick={() => {
              setShowSearchPanel(false);
            }}
          >
            <CancelIcon size="text-[2vw]"></CancelIcon>
          </span>
        ) : (
          <span
            className="search-btn z-50 p-[.8vw] rounded-full"
            onClick={() => setShowSearchPanel(true)}
          >
            <SearchIcon size="text-[1.8vw]"></SearchIcon>
          </span>
        )}
        <AnimatePresence>
          {showSearchPanel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
              className="search-panel-wrapper  flex flex-col gap-[1vw] absolute top-[5.5vw] w-[45vw] h-fit "
            >
              <div className="input-wrapper h-fit flex items-center flex-row gap-[.5vw] bg-[#1E1C21] p-[.5vw]  rounded-[1vw]">
                <div
                  onMouseOver={() => setFormatDropdownShow(true)}
                  onMouseOut={() => setFormatDropdownShow(false)}
                  className="selection-box transition-colors duration-100 ease-in relative hover:bg-[#403a4a3e] flex items-center justify-center rounded-[1vw] w-[16.5vw] h-[7.5vh] "
                >
                  <h2 className="flex items-center gap-[.7vw]">
                    <span>
                      {format === "Photos" ? (
                        <ImageIcon
                          size="text-[1.7vw]"
                          color="text-[#D8C1FF]"
                        ></ImageIcon>
                      ) : (
                        <VideoIcon
                          size="text-[1.7vw]"
                          color="text-[#D8C1FF]"
                        ></VideoIcon>
                      )}
                    </span>
                    {format}
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
                        <Link
                          onClick={formatHandler}
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
                        <Link
                          onClick={formatHandler}
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
                  className="search-bar rounded-[1vw] transition-colors duration-200 ease-in hover:bg-[#403a4a3e] w-full h-[7.5vh] p-[1.5vw] outline-0 "
                />
                <button className="bg-[#D8C1FF] transition-colors duration-200 ease-in hover:bg-[#D8C1FF] flex items-center justify-center cursor-pointer w-[6vw] h-[7.5vh] rounded-[1vw] ">
                  <SearchIcon
                    size="text-[1.7vw]"
                    color="text-[#1E1C21]"
                  ></SearchIcon>
                </button>
              </div>
              <div className="keyword-box w-full h-[40vh] hidden  rounded-[1vw] bg-[#1E1C21]"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SearchPanel;
