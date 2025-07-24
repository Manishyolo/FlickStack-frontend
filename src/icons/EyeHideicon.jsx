import React from 'react'
import { FiEyeOff } from "react-icons/fi";
const EyeHideicon = ({size,color}) => {
  return (
 <>
 <FiEyeOff className={`${size} ${color} cursor-pointer`} />
 
 </>
  )
}

export default EyeHideicon