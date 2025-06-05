import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'


const RootLayout = () => {
  return (
    <>
    <Navbar></Navbar>
     <main>
        <Outlet></Outlet>
     </main>
    </>
  )
}

export default RootLayout