import React from 'react'
import { MdOutlineCollections } from "react-icons/md";
const UserCollectionIcon = ({size,color}) => {
  return (
    <MdOutlineCollections className={`${size} ${color}`}/>
  )
}

export default UserCollectionIcon