import React from 'react'
import "../../main.css"
import FormBlob1 from '../../components/FormBlobComponents/FormBlob1'
import FormBlob2 from '../../components/FormBlobComponents/FormBlob2'
import FormBlob3 from '../../components/FormBlobComponents/FormBlob3'
const Auth = () => {
  return (
    <div className='w-full h-[100vh] relative p-[2vw]  overflow-hidden'>
          <div className="form-wrapper w-full h-full ">
             <div className="blob-container overflow-hidden flex items-end justify-center relative w-[40%] h-full rounded-[2.2vw]">
                     <FormBlob1></FormBlob1>
                     <FormBlob2></FormBlob2>
                       <FormBlob2></FormBlob2>
                         <FormBlob2></FormBlob2>
                           
                      <FormBlob3></FormBlob3>
                       <FormBlob3></FormBlob3>
                       <FormBlob3></FormBlob3>

                       <div className="intro-box w-[20vw] h-[23vw]  flex flex-col items-center justify-start  z-50">
                      <h2 className="text-[#FCFAFF] text-[1.2vw]">FlickStack.</h2>
                      <h2 className='text-[#FCFAFF] text-[2vw] mt-[1vw] font-[350]'>Get Started with Us</h2>
                      <div className="para-box  w-fit h-fit flex items-center mt-[.5vw] justify-center flex-col">
                         <p className='text-[#D2CED9] text-[1vw] items-center'>Complete these easy steps to register</p>
                         <p className='text-[#D2CED9] text-[1vw]'>your account.</p>
                      </div>
                     
                       </div>
             </div>
              <div className="form-container"></div>

          </div>

           
    </div>
  )
}

export default Auth