import React from 'react'
import { MdOutlineVideoLibrary } from "react-icons/md";
const VideoIcon = ({size,color}) => {
  return (
  <>
  <MdOutlineVideoLibrary className={`${size} ${color}`} />
  </>
  )
}

export default VideoIcon