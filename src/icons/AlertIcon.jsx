import React from 'react'
import { ImNotification } from "react-icons/im";

const AlertIcon = ({size,color}) => {
  return (
    <>
    <ImNotification  className={`${size} ${color}`}/>
    </>
  )
}

export default AlertIcon