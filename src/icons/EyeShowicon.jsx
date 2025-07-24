import React from 'react'
import { FiEye } from "react-icons/fi";

const EyeShowicon = ({size,color}) => {
  return (
 <>
  <FiEye className={`${size} ${color} cursor-pointer`} />
 
 </>
  )
}

export default EyeShowicon