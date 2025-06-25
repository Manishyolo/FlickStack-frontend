import React from "react";
import BlobBottomLeft from "../components/blobs/BlobBottomLeft";
import BlobTopRight from "../components/blobs/BlobTopRight";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Button from "../components/Button1";

const Home = () => {
  return (
    <>
      <div className="text-[#FCFAFF] overflow-x-hidden overflow-y-hidden relative bg-[#0B0A0D] w-[100%] h-fit flex flex-col items-center justify-center ">
        <BlobBottomLeft />
        <BlobTopRight />

        <Page1 />
        <Page2 />
      </div>
    </>
  );
};

export default Home;
