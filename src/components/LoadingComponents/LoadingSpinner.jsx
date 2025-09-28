import React from 'react'
import { BiLoaderCircle } from "react-icons/bi";


const LoadingSpinner = ({size,color}) => {
  return (
    <>
        <div>
           <BiLoaderCircle className={`${size} font-extrabold ${color}`}/>

        </div>
    
    
    </>

  )
}

export default LoadingSpinner