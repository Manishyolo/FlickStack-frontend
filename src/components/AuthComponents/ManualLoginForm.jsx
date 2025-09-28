import React from "react";
import { useState } from "react";
import axios from "axios";

import validateForm from "../../utils/ValidateForm.js";
import NameInput from "./FormInputComponents/NameInput";
import EmailInput from "./FormInputComponents/EmailInput";
import PasswordInput from "./FormInputComponents/PasswordInput";
import WarningIcon from "../../icons/WarningIcon";
import LoadingSpinner from "../LoadingComponents/LoadingSpinner";
const ManualLoginForm = () => {
  const [toggleForm, settoggleForm] = useState(false);

  const handleToggleForm = () => {
    settoggleForm(!toggleForm);
    clearErrorMessages();
    clearForm();
  };

  const [error, setError] = useState({ name: "", email: "", password: "" });
  const [LoginError, setLoginError] = useState({ email: "", password: "" });
  const [BackendError, setBackendError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [SignUpform, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
    type: "Sign up",
  });
  const [Loginform, setLoginForm] = useState({
    email: "",
    password: "",
    type: "Log in",
  });

  const handleChange = (e) => {
    setSignUpForm({ ...SignUpform, [e.target.name]: e.target.value.trim() });
    setLoginForm({ ...Loginform, [e.target.name]: e.target.value.trim() });
  };

  const clearForm = () => {
    setSignUpForm({ name: "", email: "", password: "", type: "Sign up" });
    setLoginForm({ email: "", password: "", type: "Log in" });
  };

  const clearErrorMessages = () => {
    setError({ name: "", email: "", password: "" });
    setLoginError({ email: "", password: "" });
    setBackendError("");
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    clearErrorMessages();
    try {
      setIsLoading(true);
      
      const newError = validateForm(SignUpform);
  
      if (
        newError.name === "" &&
        newError.email === "" &&
        newError.password === ""
      ) {
        const response = await axios.post("http://localhost:3000/user/create", {
          username: SignUpform.name,
          email: SignUpform.email,
          password: SignUpform.password,
        });

        console.log(response);

  
      }

      setError(newError);
    } catch (error) {
      setIsLoading(false);
      if (!error.response) {
        setBackendError("Network Error. Please try again later.");
        return;
      }

      setBackendError(error.response.data.error);
    }finally{
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    clearErrorMessages();
    try {
      setIsLoading(true);
      const newError = validateForm(Loginform);
      setLoginError(newError);
      console.log(newError);
      if(newError.email === "" && newError.password === ""){
         const response = await axios.post("http://localhost:3000/user/login",{
          email: Loginform.email,
          password: Loginform.password,
         })

         console.log(response);
         
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Login error:", error.response.data.error);
      setBackendError(error.response.data.error || "An error occurred during login. Please try again.");   
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="manual-login-box   flex flex-col items-center justify-center w-fit mt-[1vw] h-fit ">
        <form className="w-[fit] h-fit  flex flex-col  ">
          {toggleForm ? (
            <div className="login-form-wrappe flex flex-col items-center ">
              <EmailInput
                handleChange={handleChange}
                errorMessage={!LoginError.email ? "" : LoginError.email}
                label="Email"
                name="email"
                placeholder="eg.yourname@gmail.com"
              ></EmailInput>
              <PasswordInput
                handleChange={handleChange}
                errorMessage={!LoginError.password ? "" : LoginError.password}
                type="password"
                label="Password"
                name="password"
                placeholder="Enter your password"
              ></PasswordInput>
                {BackendError && (
                <span className="server-errors flex gap-[.5vw] mt-[1vw]  items-center justify-end">
                  <WarningIcon
                    size="text-[1.4vw]"
                    color="text-yellow-400"
                  ></WarningIcon>
                  <p className="text-yellow-400 text-[.9vw]">{BackendError}</p>
                </span>
              )}

              <button
                onClick={handleLoginSubmit}
              
                className="w-[30vw] h-[3.4vw] border-none outline text-[1.1vw] font-[550] cursor-pointer flex items-center justify-center transition-all duration-300 ease-in-out bg-[#F5C1FF] hover:bg-[#f5c1ff70] rounded-[.7vw] mt-[2vw]"
              >
                {isLoading ? (
                  <LoadingSpinner
                    size="text-[2.5vw]  animate-spin"
                    color="text-[#1E1C21]"
                  ></LoadingSpinner>
                ) : (
                  "Log in"
                )}
              </button>
            </div>
          ) : (
            <div className="sign-up-form flex flex-col items-center ">
              <NameInput
                handleChange={handleChange}
                errorMessage={!error.name ? "" : error.name}
                label="Name"
                name="name"
                placeholder="eg.Jhondoe"
              ></NameInput>
              <EmailInput
                handleChange={handleChange}
                errorMessage={!error.email ? "" : error.email}
                label="Email"
                name="email"
                placeholder="eg.yourname@gmail.com"
              ></EmailInput>

              <PasswordInput
                handleChange={handleChange}
                errorMessage={!error.password ? "" : error.password}
                type="password"
                label="Password"
                name="password"
                placeholder="Enter your password"
              ></PasswordInput>
              {BackendError && (
                <span className="server-errors flex gap-[.5vw] mt-[1.2vw]  items-center justify-end">
                  <WarningIcon
                    size="text-[1.4vw]"
                    color="text-yellow-400"
                  ></WarningIcon>
                  <p className="text-yellow-400 text-[.9vw]">{BackendError}</p>
                </span>
              )}

              <button
                onClick={handleSignUpSubmit}
             
                className="w-[30vw]  h-[3.4vw] border-none outline flex items-center justify-center text-[1.1vw] font-[550] cursor-pointer transition-all duration-300 ease-in-out bg-[#F5C1FF] hover:bg-[#f5c1ff70] rounded-[.7vw] mt-[1.9vw]"
              >
                {isLoading ? (
                  <LoadingSpinner
                    size="text-[2.5vw]  animate-spin"
                    color="text-[#1E1C21]"
                  ></LoadingSpinner>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          )}
        </form>
        <p className="text-[#D2CED9] text-[1vw] mt-[1.5vw]">
          {toggleForm ? "Don't have an account?" : "Already have an account?"}

          <span
            onClick={handleToggleForm}
            className="text-[#F5C1FF] ml-[.5vw] underline cursor-pointer"
          >
            {toggleForm ? "Sign Up" : "Log in"}
          </span>
        </p>
      </div>
    </>
  );
};

export default ManualLoginForm;
