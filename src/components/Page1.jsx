import React from "react";
import Button1 from "./ButtonComponents/Button1";
import Button2 from "./ButtonComponents/Button2";
import BlobBottomLeft from "./blobs/BlobBottomLeft";
import BlobTopRight from "./blobs/BlobTopRight";
const Page1 = () => {
  return (
    <>
      <div className="page-1 w-full h-[100vh]  pr-[2vw] pl-[2vw] overflow-hidden flex items-center justify-end flex-col gap-[1vw] relative">
      
        <div className="page-1-wrapper mb-[2vw] rounded-[1vw] flex items-center justify-center relative overflow-hidden w-full h-[85vh]">
 <BlobBottomLeft />
                <BlobTopRight />
                 
        <div className=" rounded-[1.5vw] z-10   flex items-center justify-center flex-col gap-[1.8vw]">
          <h1 className="text-[6vw]  leading-[5vw]">Find the perfect asset </h1>
          <h1 className="text-[6vw] leading-[5vw]">For your work !</h1>
          <p className="font-light">Start your creative journey today</p>

          <div className="btn-container flex flex-row  gap-[1.5vw]">
            <Button1 title="Get Started" directTo="Explore"></Button1>
            <Button2 title="Upload Your Work" directTo="Upload"></Button2>
          </div>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Page1;
