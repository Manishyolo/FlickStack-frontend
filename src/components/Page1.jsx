import React from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";

const Page1 = () => {
  return (
    <>
      <div className="page-1 w-full h-[100vh]  flex items-center justify-center flex-col gap-[1vw] relative">
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
    </>
  );
};

export default Page1;
