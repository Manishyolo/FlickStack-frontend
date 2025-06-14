import { LuSearch } from "react-icons/lu";

import React from 'react'

const SearchIcon = ({size,color}) => {
  return (
 <LuSearch className={`${size} ${color}`} />
  )
}

export default SearchIcon