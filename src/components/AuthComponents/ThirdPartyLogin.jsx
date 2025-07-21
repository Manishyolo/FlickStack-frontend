import React from 'react'

import Microsofticon from '../../icons/Microsoft';
import GoogleIcon from '../../icons/GoogleIcon';


const ThirdPartyLogin = () => {
  return (
   <>
    <div className="third-party-login-box  w-full flex flex-col items-center justify-center h-fit ">
                 <h1 className='text-[1.7vw] font-[400] text-[#FCFAFF]'>Sign Up Account</h1>
                 <p className='text-[1vw] text-[#D2CED9]'>Enter your personal data to create your account</p>
                 <div className="sign-up-option-box w-fit h-fit flex items-center justify-center gap-[2vw] mt-[2vw]">
                   <button className='text-[#FCFAFF] text-[1vw] border-1 border-[#d2ced93f] px-[4.3vw] rounded-[.7vw] py-[.6vw] flex items-center justify-center gap-[.5vw]'><GoogleIcon size="text-[1.2vw]"></GoogleIcon>Google</button>
                  <button className='text-[#FCFAFF] text-[1vw] border-1 border-[#d2ced93f] px-[4vw] rounded-[.7vw] py-[.6vw] flex items-center justify-center gap-[.5vw]'> <Microsofticon size="text-[1.2vw]"></Microsofticon> Microsoft</button>
                 </div>
               </div>  
   
   
   </>
  )
}

export default ThirdPartyLogin