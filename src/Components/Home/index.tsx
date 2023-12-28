"use client"
import React from 'react'
import { BiSolidDownArrow } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import { Fragment } from 'react'
import Image from 'next/image'

import Link from 'next/link';
function Home() {

  let [popover, setpopover] = useState(false)
  function openpopover() {
    setpopover(true)
  }

  function clospopover() {
    setpopover(false)
  }
  return (

    <div className=' relative  w-[100%] h-auto px-0 md:px-20 bg-transparent '>
        <div className="absolute inset-0">

   <Image
        src="/Logo.png" // Replace with the actual path to your image
        alt="Description of the image"
        width={650} // Replace with the actual width of your image
        height={650} // Replace with the actual height of your image
        className=" mt-16 transition-all duration-1000 ease-in-out  lg:mt-0 mx-auto my-auto opacity-10 object-cover"
      />
      </div>
<div className=''>


      <div className="flex justify-center lg:justify-end ">

<div className='flex  justify-center items-center mt-10 w-60 gap-4 rounded-md bg-[#75D38B] text-white '>

  <button
  onClick={openpopover}
  className='flex items-center relative  gap-4 px-[4px] py-[2px] '>
    <FaCirclePlus/>
    Generate Call</button>
    <div className='h-10  w-[2px] bg-white'>
    </div>
    <BiSolidDownArrow/>
</div>
      </div></div>
      <div>
<div className='xl:w-full  w-[70vw] mt-10 overflow-x-auto mx-auto relative'>

<div className='flex w-[1200px] text-center justify-around  mx-auto'>

  <div  className='flex'><h1 className='text-xs font-semibold text-[#0D4D8D]'> <span className='text-base '>0 </span> Todays Calls</h1>  </div>
 <div  className='flex'> <h1 className='text-xs font-semibold'> <span className='text-base '>9 </span> Open Calls</h1>   </div>
 <div  className='flex'> <h1 className='text-xs font-semibold'> <span className='text-base '>5 </span> In Progress</h1>   </div>
 <div  className='flex'> <h1 className='text-xs font-semibold'> <span className='text-base '>5 </span> Canceled Calls</h1>    </div>
 <div  className='flex'> <h1 className='text-xs font-semibold'> <span className='text-base '>56</span>  Condition Corrected</h1>  </div>
 <div  className='flex'> <h1 className='text-xs font-semibold'> <span className='text-base '>10</span>  Condition Uncorrect</h1>  </div>
</div>



<div className=" w-[1200px] mx-auto bg-[#E0E0E0] rounded-sm h-2 dark:bg-[#E0E0E0]  mt-2 ">
    <div className="bg-[#0D4D8D] text-xs h-2 font-medium w-44 text-blue-100 text-center p-0.5 leading-none rounded-sm " > </div>
  </div>
  </div>
  <div className='bg-opacity-75 backdrop-filter backdrop-blur-lg relative'>

  
  <Transition appear show={popover} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={clospopover}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className='flex items-center justify-between'>

                    <Dialog.Title onClick={clospopover} as="h3" className="text-xl mx-auto p-4 text-gray-900" >
                    To create new Call please click here             </Dialog.Title>

                  </div>
                  <Link href={"/callers"}>
                  
                 <button className='flex items-center gap-2 py-2 px-6 rounded-md bg-[#75D38B] text-white mx-auto'><FaCirclePlus/>New Call</button>
                  </Link>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      </div>
      </div>




    </div>
  )
}

export default Home