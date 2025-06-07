import React from 'react'
import { RiUserHeartLine } from "react-icons/ri";

const UserPrefrenceIcon = ({size,color}) => {
  return (
    <RiUserHeartLine className={`${size} ${color}`} />
  )
}

export default UserPrefrenceIcon