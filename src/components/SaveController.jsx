import React from 'react'
import HearIcon from "../icons/HearIcon.jsx";
import BookmarkIcon from "../icons/BookmarkIcon.jsx";
import {motion,AnimatePresence} from 'framer-motion';
const SaveController = ({animateState}) => {
  return (
   <>{
       animateState && <AnimatePresence>
  <motion.div     initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20}}
          transition={{ duration: 0.3, ease: 'easeInOut' }} className="save-controller  flex flex-row gap-[.8vw]  w-fit p-[.6vw] h-fit absolute right-0 ">
                <span className=" rounded-[.8vw] hover:bg-[#2523299d] p-[.6vw]">
                  {" "}
                  <BookmarkIcon
                    size="text-[1.6vw]"
                    color="text-[#D8C1FF]"
                  ></BookmarkIcon>
                </span>
                <span className=" rounded-[.8vw] hover:bg-[#2523299d] p-[.6vw]">
                  <HearIcon
                    size="text-[1.6vw]"
                    color="text-[#D8C1FF]"
                  ></HearIcon>
                </span>
              </motion.div>
       </AnimatePresence>

   }
       
   
   </>
  )
}

export default SaveController