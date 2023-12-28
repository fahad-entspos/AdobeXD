import React from 'react'
import { MdOutlineStorage } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import Image from 'next/image'
function Navbar() {
  return <div className='bg-[#F5F5F5] h-full  flex items-center justify-between overflow-hidden px-[6px] lg:px-5 font-roboto transition-all text-xs duration-1000 ease-in-out'>


<div className='flex gap-2 md:gap-8 h-12 items-center '> 
<svg className='min-w-[24px] min-h-[24px]  max-w-[24px] max-h-[24px] hidden  lg:block ' id="Icon_ionic-ios-options" data-name="Icon ionic-ios-options" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.691 29.198">
  <path id="Path_9" data-name="Path 9" d="M23.123,26.244a3.265,3.265,0,0,1,2.884-1.494,3.265,3.265,0,0,1,2.884,1.494h5.917a1.153,1.153,0,0,1,1.257,1h0a1.153,1.153,0,0,1-1.257,1H28.891a3.265,3.265,0,0,1-2.884,1.494,3.265,3.265,0,0,1-2.884-1.494H4.632a1.153,1.153,0,0,1-1.257-1h0a1.153,1.153,0,0,1,1.257-1Z" transform="translate(-3.375 -0.531)" fill="#30323d"/>
  <path id="Path_10" data-name="Path 10" d="M10.55,16.681a3.265,3.265,0,0,1,2.884-1.494,3.265,3.265,0,0,1,2.884,1.494H34.809a1.153,1.153,0,0,1,1.257,1h0a1.153,1.153,0,0,1-1.257,1H16.318a3.265,3.265,0,0,1-2.884,1.494,3.265,3.265,0,0,1-2.884-1.494H4.632a1.153,1.153,0,0,1-1.257-1h0a1.153,1.153,0,0,1,1.257-1Z" transform="translate(-3.375 -3.078)" fill="#30323d"/>
  <path id="Path_11" data-name="Path 11" d="M23.123,7.119a3.265,3.265,0,0,1,2.884-1.494,3.265,3.265,0,0,1,2.884,1.494h5.917a1.153,1.153,0,0,1,1.257,1h0a1.153,1.153,0,0,1-1.257,1H28.891A3.265,3.265,0,0,1,26.007,10.6,3.265,3.265,0,0,1,23.123,9.11H4.632a1.153,1.153,0,0,1-1.257-1h0a1.153,1.153,0,0,1,1.257-1Z" transform="translate(-3.375 -5.625)" fill="#30323d"/>
</svg>


<Image
className='items-center'
      src="/Logo.png"
      width={30}
      height={30}
      alt="error"
    />
<h1 className='text-[#5C80BC] hidden  lg:block font-roboto font-[550]'>Chavivim</h1>

<div className='h-40 w-[2px] rounded-lg hidden  lg:block bg-[#A9AAB3]'></div>
<h1  className='text-[#5C80BC] text-sm hidden  lg:block font-roboto font-[550]'>Good afternoon Ushy</h1>


</div>


<h1 className='text-[#5C80BC]  text-[11px] md:text-sm font-roboto font-[550]'>10 Members are on calls now!!</h1>



<div className='flex gap-4 items-center'>
<svg className='hidden  lg:block' xmlns="http://www.w3.org/2000/svg" width="25.313" height="16.875" viewBox="0 0 31.313 20.875">
  <g id="Group_2" data-name="Group 2" transform="translate(-12)">
    <g id="Group_1" data-name="Group 1" transform="translate(12)">
      <path id="Icon_material-backup" data-name="Icon material-backup" d="M25.246,13.88A9.775,9.775,0,0,0,6.98,11.271a7.825,7.825,0,0,0,.848,15.6H24.789a6.5,6.5,0,0,0,.457-12.995Zm-6.98,3.862v5.219H13.047V17.742H9.133l6.524-6.524,6.524,6.524Z" transform="translate(0 -6)" fill="#707070"/>
    </g>
  </g>
</svg>
<input
        className="md:w-60 w-20 transition-all text-xs duration-1000 ease-in-out h-6 px-4 py-2 border border-black rounded-md focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Search By Phone #,Call ID,Dispatcher,"
      />
    <FaBell className="w-5 h-5 text-[#707070]" />
</div>
  </div>
}

export default Navbar