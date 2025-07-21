import React from 'react'

const NameField = () => {
  return (
    <>
       <div className="name-input-wrapper  w-fit flex items-center justify-center gap-[2vw]">
            <div className="first-name-box">
              <label
                className="block text-white mb-[.5vw] text-[1.1vw]"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                className="w-[14vw] rounded-[.7vw] text-[#FCFAFF] placeholder-[#D2CED9] text-[1vw] border-none outline-none p-[.8vw] h-[3.4vw] bg-[#1E1C21]"
                placeholder="e.g. John"
                type="text"
              />
            </div>

            <div className="last-name-box">
              <label
                className="block text-white text-[1.1vw] mb-[.5vw]"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                className="w-[14vw] h-[3.4vw] rounded-[.7vw] text-[#FCFAFF] placeholder-[#D2CED9] text-[1vw] border-none outline-none p-[.8vw] bg-[#1E1C21]"
                placeholder="e.g. John"
                type="text"
              />
            </div>
          </div>
     
    </>
  )
}

export default NameField