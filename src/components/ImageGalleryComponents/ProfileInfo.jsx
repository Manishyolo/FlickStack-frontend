import React from 'react'
import { motion,AnimatePresence } from 'framer-motion'
import { Link } from 'react-router'


const ProfileInfo = ({animateState}) => {
  return ( 
           animateState && ( <AnimatePresence>
    <motion.div initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}  className='absolute p-[1.2vw] z-40 flex flex-col items-center gap-[1vw] justify-center rounded-[1vw] bottom-[5.3vw] bg-[#252329] w-fit  h-fit'>
      <div className='absolute bottom-[-.4vw] left-4 bg-[#252329]  rotate-45 w-[1.5vw] h-[1.5vw]'></div>
        
        <div className="uploader-info-box w-[26vw] h-[9vh] flex flex-row justify-between items-center gap-[1.9vw]">

           <div className="uploader-info-wrapper flex flex-row items-center gap-[1.2vw]">
<div className="uploader-img w-[4.3vw] h-[4.3vw]  rounded-full overflow-hidden">
           <img className='w-full h-full object-cover' src="https://avatars.githubusercontent.com/u/113233807?v=4" alt="" />
           </div>
            <div className="uploader-name w-fit h-fit">
                <p className='text-[1.1vw] text-[#D2CED9] font-[600]'>Manish Kumar singh</p>
                <p className='text-[.9vw]'><span>New Delhi</span> , <span>India</span></p>
            </div>
           </div>
           

            <div className="uploader-follow-btn w-fit h-fit">
                <button className='rounded-[1vw] text-[1.3vw] text-[#0B0A0D] font-[550] border px-[1.7vw] py-[.7vw] cursor-pointer bg-[#D8C1FF]'>Follow</button>
            </div>
        </div>
         
         <div className="uploader-stats-box flex flex-row items-center justify-between  w-full h-fit">
            <div className="total-views  w-fit h-fit flex flex-col items-center gap-[.2vw]">
              <h2 className='text-[1vw] text-[#D8C1FF]'>Total views</h2>
              <p className='text-[1.5vw]'>45</p>
            </div>
             <div className="total-views  w-fit h-fit flex flex-col items-center gap-[.2vw]">
              <h2 className='text-[1vw] text-[#D8C1FF]'>Gallery</h2>
              <p className='text-[1.5vw]'>45</p>
            </div>
             <div className="total-views w-fit h-fit flex flex-col items-center gap-[.2vw]">
              <h2 className='text-[1vw] text-[#D8C1FF]'>All-time rank</h2>
              <p className='text-[1.5vw]'>45</p>
            </div>
         </div>
      

      </motion.div>
    </AnimatePresence>)
  
   

  )
}

export default ProfileInfo