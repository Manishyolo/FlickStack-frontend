import React from 'react'
import { FaRegBookmark } from "react-icons/fa6";
const BookmarkIcon = ({size,color}) => {
  return (
  <>
  <FaRegBookmark  className={`${size} ${color}`}/>
  
  </>
  )
}

export default BookmarkIcon