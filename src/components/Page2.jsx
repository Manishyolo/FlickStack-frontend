import React from 'react'
import DynamicDropdownSelector from './DynamicDropdownSelector'

const Page2 = () => {
    const data = [
      {value:"Trending"},
      {value:"Recent"},
      {value:"Following"},
    ]
  return (
    <>
     <div className='w-[100%]  pl-[2vw] pr-[2vw] flex flex-col  items-end h-[100vh]'>
            <div className="gallery-navigation-bar flex items-center justify-between  w-full h-[8vh] ">
            <h2 className='text-[1.6vw]'>Free Photos</h2>

          <DynamicDropdownSelector data={data}></DynamicDropdownSelector>
            </div>

     </div>
    
    
    
    </>
  )
}

export default Page2