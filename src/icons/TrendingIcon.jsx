import React from 'react'
import { IoTrendingUpOutline } from "react-icons/io5";

const TrendingIcon = ({size,color}) => {
  return (
  <IoTrendingUpOutline className={`${size} ${color}`} />
  )
}

export default TrendingIcon