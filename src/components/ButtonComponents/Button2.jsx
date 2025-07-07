import React from 'react'
import { Link } from 'react-router';

const Button2 = ({title,directTo}) => {
  return (
   <>
   <div className='relative cursor-pointer'>


      <div
            className={`absolute -inset-[5px] rounded-[1vw] blur-[40px] opacity-50 z-0
  
    hover:bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-600 ease-in-out
   
    `}
          ></div>
  <button className='cursor-pointer bg-[#252329] text-[#D2CED9] text-[1.2vw] font-[400] px-[1.9vw] py-[.9vw]  rounded-[2.9vw]'>
      
      <Link to={directTo} className='w-full h-full flex items-center justify-center'>
      {title}
      </Link>
      </button>

   </div>
   
   
   
   </>
  )
}

export default Button2