import React from 'react'
import { IoWarningOutline } from "react-icons/io5";

const WarningIcon = ({size,color}) => {
  return (
   <>
    <IoWarningOutline  className={`${size} ${color}`}/>
   
   </>
  )
}

export default WarningIcon