import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { images } from "../data.js"; // your 100 random-size images


import SaveController from "../ImageGalleryComponents/SaveController.jsx";
import UploaderController from "../ImageGalleryComponents/UploaderController.jsx";
import ProfileInfo from "../ImageGalleryComponents/ProfileInfo.jsx";
const ImageGallery = () => {
   const [hoveredImageId,sethoveredImageId] = useState(null);
   const [showUploader,setshowUploader] = useState(false);
   console.log(images);
   

 
  return (
    <>
      <div className="img-gallery">
        {images.map((image, index) => {
          return (
            <div  onMouseOver={()=>sethoveredImageId(image.id)} onMouseOut={()=>sethoveredImageId(null)}
              key={index}
              className="gallery-item relative flex justify-center cursor-pointer overflow-hidden rounded-[1vw] mb-[2.2vw]"
            >
           
              {hoveredImageId === image.id && (
                <>
                                 <SaveController animateState={true} ></SaveController>
          <UploaderController imgData={{hoveredImageId:hoveredImageId,currentimgId:image.id}} animateState={true} ></UploaderController>
                </>

              )}
         
              
              <img  src={image.src} alt={image.alt} className="w-full h-auto" />

            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallery;
