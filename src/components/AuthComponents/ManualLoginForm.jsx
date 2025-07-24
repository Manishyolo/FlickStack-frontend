import React from "react";
import { useState } from "react";
import axios from "axios";
import NameField from "./NameField";
import InputField from "./InputField";
import validateForm from "../../utils/ValidateForm.js"
const ManualLoginForm = () => {
  

  const [error, setError] = useState({ name: "", email: "", password: "" });

  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value.trim() });
  };

  const clearErrorMessages = () => {
    setError({ ...error, name: "", email: "", password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearErrorMessages();
    try {
      const newError = validateForm(form);
      setError(newError);
    } catch (error) {}

    
  };

  console.log(error.name, error.email, error.password);
  return (
    <>
      <div className="manual-login-box   flex flex-col items-center justify-center w-fit mt-[1vw] h-fit ">
        <form className="w-[fit] h-fit  flex flex-col  ">
          <InputField
            handleChange={handleChange}
            errorMessage={!error.name ? "" : error.name}
            label="Name"
            name="name"
            placeholder="eg.Jhondoe"
          ></InputField>
          <InputField
            handleChange={handleChange}
            errorMessage={!error.email ? "" : error.email}
            label="Email"
            name="email"
            placeholder="eg.yourname@gmail.com"
          ></InputField>

          <InputField
            handleChange={handleChange}
            errorMessage={!error.password ? "" : error.password}
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your password"
          ></InputField>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-[30vw] h-[3.4vw] border-none outline text-[1.1vw] font-[550] cursor-pointer transition-all duration-300 ease-in-out bg-[#F5C1FF] hover:bg-[#f5c1ff70] rounded-[.7vw] mt-[2.5vw]"
          >
            Sign Up
          </button>
        </form>
        <p className="text-[#D2CED9] text-[1vw] mt-[1.5vw]">
          Already have an account?{" "}
          <span className="text-[#F5C1FF] ">Log In</span>
        </p>
      </div>
    </>
  );
};

export default ManualLoginForm;
