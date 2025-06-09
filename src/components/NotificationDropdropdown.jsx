import React from 'react'
import AlertIcon from '../icons/AlertIcon'
const NotificationDropdropdown = () => {
  return (
    <>
     <div className="notification-panel absolute top-[3.5vw] right-0 bg-[#1E1C21] p-[.8vw] rounded-[1vw] flex flex-col gap-[.8vw] w-[20vw] h-[25vw] ">
           <h2 className="headline h-fit border-2 p-[.9vw] flex items-center justify-between">
            Notification <span><AlertIcon size="text-[1.7vw]" color="text-[#D8C1FF]"></AlertIcon></span>
           </h2>
         </div>
    
    </>
  )
}

export default NotificationDropdropdown