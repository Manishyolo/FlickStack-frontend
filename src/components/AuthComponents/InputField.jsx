import React from 'react'
import { useState } from 'react';
import EyeShowicon from "../../icons/EyeShowicon";
import EyeHideicon from "../../icons/EyeHideicon";
import WarningIcon from "../../icons/WarningIcon";

const InputField = ({label,name,placeholder,handleChange,errorMessage}) => {
  
   const [type,setType] = useState(name === "password" ? true : false);
  const handleType = ()=>{

    setType(!type);
  }
  return (
   <>
   <div className="input-wrapper relative">
     <label
            className=" flex flex-row items-center justify-between relative w-full text-white text-[1.1vw] mb-[.5vw] mt-[1.3vw] "
            htmlFor={name}
          >
        {label}
        {errorMessage && ( <span className='error-message flex items-center  gap-[.5vw]'>
          <WarningIcon size="text-[1.4vw]" color="text-red-400" />
             <p className='text-[.9vw] text-red-400'>{errorMessage}</p>
          </span>)}
        
          </label>
         
          <input onChange={handleChange}
            placeholder={placeholder}
            id={name}
            name={name}
            type={type ? "password" : "text"}
            className="w-[30vw] relative h-[3.4vw] border  rounded-[.7vw] placeholder-[#D2CED9] text-[#FCFAFF] text-[1vw] border-none outline-none p-[.8vw] bg-[#1E1C21]"
          />
          {name === "password" && ( <span onClick={handleType} className='w-[2vw] h-[2vw] absolute right-[.8vw] top-[4.1vw] flex items-center justify-center'>
            {type ? (
             
           <EyeShowicon  size="text-[1.5vw]" color="text-[#D8C1FF]" />
            ) : (
                  <EyeHideicon size="text-[1.5vw]" color="text-[#D8C1FF]" />
            )}
          </span> )}

         
   </div>
    
   
   </>
  )
}

export default InputField