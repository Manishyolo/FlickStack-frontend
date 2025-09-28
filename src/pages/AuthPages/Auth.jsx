import React from 'react'
import "../../main.css"
import StepContainer from '../../components/AuthComponents/StepContainer'
import ThirdPartyLogin from '../../components/AuthComponents/ThirdPartyLogin'
import Separator from '../../components/AuthComponents/Separator'
import ManualLoginForm from '../../components/AuthComponents/ManualLoginForm'

const Auth = () => {
  return (
    <div className='w-full h-[100vh] relative p-[2vw]  overflow-hidden'>
          <div className="form-wrapper   w-full  h-full  flex items-center justify-center gap-[4vw]">
             <StepContainer></StepContainer>
              <div className="form-container   w-fit  h-full px-[4vw] flex flex-col items-center justify-center">
               <ThirdPartyLogin></ThirdPartyLogin>
               <Separator></Separator>
                <ManualLoginForm></ManualLoginForm>
               
              


              </div>

          </div>

           
    </div>
  )
}

export default Auth