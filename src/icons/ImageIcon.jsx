import React from 'react'
import { LuImage } from "react-icons/lu";
const ImageIcon = ({size,color}) => {
  return (
   <LuImage  className={`${size} ${color}`}/>
  )
}

export default ImageIcon