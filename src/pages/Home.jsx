import React from "react";
import BlobBottomLeft from "../components/blobs/BlobBottomLeft";
import BlobTopRight from "../components/blobs/BlobTopRight";
import LandingPage from "../components/HomePageComponents/LandingPage";
import GalleryPage from "../components/HomePageComponents/GalleryPage";


const Home = () => {
  return (
    <>
      <div className="text-[#FCFAFF]  overflow-x-hidden overflow-y-hidden relative bg-[#0B0A0D] w-[100%] h-fit flex flex-col items-center justify-center ">
       

        <LandingPage />
        <GalleryPage />
      </div>
    </>
  );
};

export default Home;
