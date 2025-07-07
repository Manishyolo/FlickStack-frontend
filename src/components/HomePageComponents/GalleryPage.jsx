import React from 'react'
import DynamicDropdownSelector from '../DropDownsComponents/DynamicDropdownSelector'

import ImageGallery from '../MainComponents/ImageGallery'
const Page2 = () => {
  
  
    const data = [
      {value:"Trending"},
      {value:"Recent"},
      {value:"Following"},
    ]
  return (
    <>
     <div className='w-[100%] pl-[2vw] pb-[2vw] pr-[2vw] flex flex-col  items-end h-fit'>
            <div className="gallery-navigation-bar flex items-center justify-between  w-full h-fit ">
            <h2 className='text-[1.6vw]'>Free Photos</h2>

          <DynamicDropdownSelector data={data} mainTitle="Trending"></DynamicDropdownSelector>
            </div>


            <div className="gallery-container w-full mt-[2vw]">
          
        <ImageGallery></ImageGallery>
            </div>

     </div>
    
    
    
    </>
  )
}

export default Page2