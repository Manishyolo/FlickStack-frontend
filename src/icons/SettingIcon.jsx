import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";

const SettingIcon = ({size,color}) => {
  return (
   <IoSettingsOutline className={`${size} ${color}`} />
  )
}

export default SettingIcon