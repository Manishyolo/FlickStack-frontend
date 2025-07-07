import React from 'react'
import Navbar from '../components/MainComponents/Navbar'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router'
import { useEffect } from 'react'
import NProgress from 'nprogress'


const RootLayout = () => {
 const location = useLocation();

  useEffect(()=>{
     NProgress.start();
     
     const timeOut = setTimeout(()=>{
   NProgress.done();

     },500)

 return ()=>{
    clearTimeout(timeOut);
    NProgress.done();
 }


  },[location]);



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