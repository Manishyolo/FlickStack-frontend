import React from "react";
import NameField from "./NameField";
import InputField from "./InputField";


const ManualLoginForm = () => {
  return (
    <>
      <div className="manual-login-box   flex flex-col items-center justify-center w-fit mt-[1vw] h-fit ">
        <form className="w-[fit] h-fit  flex flex-col  ">
        <InputField label="Name" name="name" placeholder="eg.Jhondoe"></InputField>
 <InputField label="Email" name="email" placeholder="eg.yourname@gmail.com"></InputField>

       <InputField label="Password" name="password" placeholder="Enter your password"></InputField>

     
          <button
            type="submit"
            className="w-[30vw] h-[3.4vw] border-none outline text-[1.1vw] font-[550] cursor-pointer bg-[#F5C1FF] rounded-[.7vw] mt-[2.5vw]"
          >
            Sign Up
          </button>
        </form>
        <p className="text-[#D2CED9] text-[1vw] mt-[1.5vw]">
          Already have an account?{" "}
          <span className="text-[#F5C1FF] ">Sign In</span>
        </p>
      </div>
    </>
  );
};

export default ManualLoginForm;
