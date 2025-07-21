import React from 'react'
import FormBlob1 from '../../components/FormBlobComponents/FormBlob1'
import FormBlob2 from '../../components/FormBlobComponents/FormBlob2'
import FormBlob3 from '../../components/FormBlobComponents/FormBlob3'
const StepContainer = () => {
  return (
    <>
    <div className="blob-container border  overflow-hidden flex items-end justify-center relative w-[56%] h-full rounded-[2.2vw]">
                     <FormBlob1></FormBlob1>
                     <FormBlob2></FormBlob2>
                       <FormBlob2></FormBlob2>
                         <FormBlob2></FormBlob2>
                           
                      <FormBlob3></FormBlob3>
                       <FormBlob3></FormBlob3>
                       <FormBlob3></FormBlob3>

                       <div className="intro-box   w-fit h-fit mb-[3.5vw] flex flex-col items-center justify-start  z-50">
                      <h2 className="text-[#FCFAFF] text-[1.5vw]">FlickStack.</h2>
                      <h2 className='text-[#FCFAFF] text-[2.8vw] mt-[1vw] font-[350]'>Get Started with Us</h2>
                      <div className="para-box  w-fit h-fit flex items-center mt-[.5vw] justify-center flex-col">
                         <p className='text-[#D2CED9] text-[1.2vw] items-center'>Complete these easy steps to register</p>
                         <p className='text-[#D2CED9] text-[1.2vw]'>your account.</p>
                      </div>
                      <div className="setp-box w-full h-[7.5vh] bg-[#F5C1FF] flex items-center justify-start pl-[1.3vw] gap-[1vw] mt-[2.3vw] rounded-[1.1vw]">
                        <span className='w-[1.8vw] h-[1.8vw] rounded-full bg-black  text-white text-[.9vw] flex items-center justify-center'>1</span>
                              <h3 className='text-[1.1vw] font-[500]'>Create your account</h3>
                      </div>
                        <div className="setp-box w-full h-[7.5vh] bg-[#1E1C21] mt-[.9vw] flex items-center justify-start pl-[1.3vw] gap-[1vw] rounded-[1.1vw]">
                           <span className='w-[1.8vw] h-[1.8vw] rounded-full bg-[#343336]  text-white text-[.7vw] flex items-center justify-center'>2</span>
                              <h3 className='text-[1.1vw] text-[#D2CED9] font-[500]'>Choose your interests</h3>
                        </div>
                     <div className="setp-box w-full h-[7.5vh] bg-[#1E1C21] mt-[.9vw] flex items-center justify-start pl-[1.3vw] gap-[1vw] rounded-[1.1vw]">
                       <span className='w-[1.8vw] h-[1.8vw] rounded-full bg-[#343336]  text-white text-[.7vw] flex items-center justify-center'>3</span>
                              <h3 className='text-[1.1vw] text-[#D2CED9] font-[500]'>Explore FlickStack.</h3>
                     </div>
                       </div>
             </div>
    
    </>
  )
}

export default StepContainer