import React from 'react'
import { GoBell } from "react-icons/go";
const BellIcon = ({size}) => {
  return (
    <GoBell className={`${size}`} />
  )
}

export default BellIcon