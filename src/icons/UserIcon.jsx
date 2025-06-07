import React from 'react'
import { RiUserLine } from "react-icons/ri";
const UserIcon = ({size,color}) => {
    console.log(size,color);
    
  return (
   <RiUserLine className={`${size} ${color}`} />
  )
}

export default UserIcon