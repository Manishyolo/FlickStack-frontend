import React from 'react'
import { AiOutlineLike } from "react-icons/ai";

const LikeIcon = ({size,color}) => {
  return (
    <AiOutlineLike className={`${size} ${color}`} />
  )
}

export default LikeIcon