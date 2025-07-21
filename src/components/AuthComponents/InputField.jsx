import React from 'react'

const InputField = ({label,name,placeholder}) => {
  return (
   <>
     <label
            className="block  w-fit text-white text-[1.1vw] mb-[.5vw] mt-[1.3vw]"
            htmlFor={name}
          >
        {label}
          </label>
          <input
            placeholder={placeholder}
            id={name}
            name={name}
            type="text"
            className="w-[30vw] h-[3.4vw] rounded-[.7vw] placeholder-[#D2CED9] text-[#FCFAFF] text-[1vw] border-none outline-none p-[.8vw] bg-[#1E1C21]"
          />
   
   </>
  )
}

export default InputField