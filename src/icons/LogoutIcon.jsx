import React from 'react'
import { BiLogOut } from "react-icons/bi";
const LogoutIcon = ({size,color}) => {
  return (
   <BiLogOut className={`${size} ${color}`} />
  )
}

export default LogoutIcon