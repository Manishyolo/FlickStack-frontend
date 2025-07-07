import React from 'react'
import DownloadIcon from '../../icons/DownloadIcon'
const DownloadBtn = () => {
  return (
    <>
      <div className='download-btn cursor-pointer'>
        <button className=' flex flex-row items-center rounded-[.9vw] bg-[#252329] gap-[.5vw] p-[.9vw]'>
             <span>
        <DownloadIcon size="text-[1.6vw]" color="text-[#D8C1FF]"></DownloadIcon>
      </span>
        <h2 className='font-[500] text-[1.1vw]'>Download</h2>
        </button>
     
      </div>
    
    </>
  )
}

export default DownloadBtn