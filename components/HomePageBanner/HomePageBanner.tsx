import React from 'react'
import CustomBtn from '../CustomBtn/CustomBtn'
import ChevTopRightIcon from '../Icons/ChevTopRightIcon/ChevTopRightIcon'
import PlayIcon from '../Icons/PlayIcon/PlayIcon'

function HomePageBanner() {
  return (
   <>
 <div className='px-4 lg:px-24 py-10 relative'>
 <div className='grid grid-cols-2 lg:grid-cols-3'>
 <div className='flex justify-center items-start flex-col gap-4'>
         <div className='text-white font-extrabold text-2xl lg:text-4xl px-8 py-2'>LET’S</div>
         <div className='text-white font-extrabold text-2xl lg:text-4xl px-8 py-2'>DISCOVER</div>
         <div className='text-customBlack font-extrabold text-2xl lg:text-4xl bg-customBlue w-fit clipPath px-8 py-2'>ATEX</div>
         <div className='text-white font-extrabold text-2xl lg:text-4xl px-8 py-2 mb-9'>Excellence.</div>
         <CustomBtn title='Let’s Get Start' icon={<ChevTopRightIcon />} shadowColor='shadow-white' />
      </div> 


      <div className='flex justify-center items-center'>
         <img src="./earth.png" className='w-full ' alt="" />
      </div>


      <div className='flex justify-center items-start flex-col gap-4 col-span-2 lg:col-span-1'>
         <div className='flex items-center gap-2 mt-10 lg:mt-0'>
            <PlayIcon/>
            <div className='text-white font-bold text-base lg:text-xl'>
            Build your brand
            </div>
         </div>
         <p className='text-gray-400 font-semibold text-lg'>
         Our marketing and commerce tools work together to help you run your business — <span className='text-white'>so you can take on whatever’s next.</span>
         </p>
      </div>
   </div>
   <div className='w-fit h-fit absolute top-0 right-0'>
      <img src="./bannerPic.png" alt="" />
   </div>
 </div>
   </>
  )
}

export default HomePageBanner