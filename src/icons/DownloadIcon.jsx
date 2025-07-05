import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
const DownloadIcon = ({size,color}) => {
  return (
    <>
     <MdOutlineFileDownload  className={`${size} ${color}`}/>
    </>
  )
}

export default DownloadIcon