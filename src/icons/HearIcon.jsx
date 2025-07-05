import React from 'react'
  import { FaRegHeart } from "react-icons/fa6";

const HearIcon = ({size,color}) => {
  return (
    <>
  <FaRegHeart className={`${size} ${color}`} />
    </>
  )
}

export default HearIcon