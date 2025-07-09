import React from "react";
import DownloadBtn from "../ButtonComponents/DownloadBtn.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProfileInfo from "./ProfileInfo.jsx";

const UploaderController = ({ animateState, imgData }) => {
  const { hoveredImageId, currentimgId } = imgData;
  const [showUploader, setShowUploader] = useState(false);
 
  return (
    <>
      {animateState && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="uploader-controller flex flex-row items-end gap-[1.4vw] justify-between absolute bottom-0  pr-[.9vw] pl-[.9vw] pb-[.9vw]  w-full h-fit"
          >
            <div
            onMouseOver={() => setShowUploader(true)}
                onMouseLeave={() => setShowUploader(false)}
              className="uploader-container  relative  flex flex-col  gap-[.6vw]  w-fit h-fit"
            >
     

  {
              showUploader && (<ProfileInfo animateState={showUploader}></ProfileInfo>)
  }
          
      
              <span
                  onMouseOver={() => setShowUploader(true)}
                onMouseLeave={() => setShowUploader(false)}
                className="uploader-img w-[3vw] overflow-hidden block h-[3vw]  rounded-full"
              >
                <img
                  className="w-full h-full object-cover"
                  src="https://avatars.githubusercontent.com/u/113233807?v=4"
                  alt=""
                />
              </span>

              <h2 className="font-[650] text-[#ffff] text-[1.1vw]">
                Manish Kumar singh
              </h2>
            </div>
            <div className="download-btn  w-fit h-fit">
              <DownloadBtn></DownloadBtn>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default UploaderController;
