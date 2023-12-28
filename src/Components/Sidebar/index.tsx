"use client"
import React, { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { ImUser } from "react-icons/im";
import { FaHeadset } from "react-icons/fa6";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Sidebar = () => {
  const [isMobileWidth, setIsMobileWidth] = useState(false);
const pathname = usePathname()
  // const ToggleWidth = () => {
  //   setIsMobileWidth(!isMobileWidth);
  // };

  return <>

    {/* <button
      onClick={ToggleWidth}
      className=" w-8 h-8  fixed top-0 left-0   mt-2 ml-2 md:hidden block "
    >
      <svg className='h-[22px]' id="Icon_ionic-ios-options" data-name="Icon ionic-ios-options" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.691 29.198">
        <path id="Path_9" data-name="Path 9" d="M23.123,26.244a3.265,3.265,0,0,1,2.884-1.494,3.265,3.265,0,0,1,2.884,1.494h5.917a1.153,1.153,0,0,1,1.257,1h0a1.153,1.153,0,0,1-1.257,1H28.891a3.265,3.265,0,0,1-2.884,1.494,3.265,3.265,0,0,1-2.884-1.494H4.632a1.153,1.153,0,0,1-1.257-1h0a1.153,1.153,0,0,1,1.257-1Z" transform="translate(-3.375 -0.531)" fill="#30323d" />
        <path id="Path_10" data-name="Path 10" d="M10.55,16.681a3.265,3.265,0,0,1,2.884-1.494,3.265,3.265,0,0,1,2.884,1.494H34.809a1.153,1.153,0,0,1,1.257,1h0a1.153,1.153,0,0,1-1.257,1H16.318a3.265,3.265,0,0,1-2.884,1.494,3.265,3.265,0,0,1-2.884-1.494H4.632a1.153,1.153,0,0,1-1.257-1h0a1.153,1.153,0,0,1,1.257-1Z" transform="translate(-3.375 -3.078)" fill="#30323d" />
        <path id="Path_11" data-name="Path 11" d="M23.123,7.119a3.265,3.265,0,0,1,2.884-1.494,3.265,3.265,0,0,1,2.884,1.494h5.917a1.153,1.153,0,0,1,1.257,1h0a1.153,1.153,0,0,1-1.257,1H28.891A3.265,3.265,0,0,1,26.007,10.6,3.265,3.265,0,0,1,23.123,9.11H4.632a1.153,1.153,0,0,1-1.257-1h0a1.153,1.153,0,0,1,1.257-1Z" transform="translate(-3.375 -5.625)" fill="#30323d" />
      </svg>
    </button> */}
    <div
      className="h-full sm:[5%]  lg:w-[12%]  bg-[#F5F5F5] text-white  transition-all duration-300 ease-in-out sm:px-3 px-2 ">
      <div className='flex flex-col gap-7  mt-6 font-medium text-[12px]'>
        <Link href={"/home"} className=''>
<div className={`${
          "/home" === pathname
            ? ' text-[#0D4D8D]'
            : 'text-black'
        } flex items-center gap-3`}>

          <IoHome  className=' min-w-[24px] min-h-[24px]' />
          <h1 className=' hidden lg:block'>Home</h1>
</div>
        </Link>

        <Link href={"/call-history"} className=''>
<div className={`${
          "/call-history" === pathname
            ? ' text-[#0D4D8D]'
            : 'text-black'
        } flex items-center gap-3`}>

          <IoCallSharp  className=' min-w-[24px] min-h-[24px]' />

          {/* <svg   id="Group_1" data-name="Group 1" xmlns="http://www.w3.org/2000/svg" width="26.994" height="26.969" viewBox="0 0 32.994 33.969">
  <path id="Path_2" data-name="Path 2" d="M292.82,231.727a14.2,14.2,0,0,1-2.447-.909,49.849,49.849,0,0,1-17.7-17.778,4.383,4.383,0,0,1,.513-5.288,34.032,34.032,0,0,1,2.527-2.541,3.3,3.3,0,0,1,4.651.016,10.117,10.117,0,0,1,2.17,2.567c.739,1.47.221,2.841-.958,3.977-1.082,1.042-1.059,1.058-.09,2.217a67.239,67.239,0,0,0,8.386,8.364c.675.567,1.116.607,1.761-.052,2.062-2.105,3.769-2.041,5.913.051,1.117,1.09,2.053,2.21,1.706,3.915-.006.03-.006.061-.012.091C298.815,228.423,294.988,231.549,292.82,231.727Z" transform="translate(-272.014 -197.758)" fill="#30323d"/>
  <path id="Path_3" data-name="Path 3" d="M320.768,205a8.951,8.951,0,1,1,9.023-8.805A8.763,8.763,0,0,1,320.768,205Zm7.539-8.876a7.364,7.364,0,0,0-7.456-7.511,7.5,7.5,0,0,0-7.532,7.5,7.66,7.66,0,0,0,7.519,7.487A7.509,7.509,0,0,0,328.306,196.129Z" transform="translate(-296.797 -187.102)" fill="#30323d"/>
  <path id="Path_4" data-name="Path 4" d="M337.7,204.359H332v-6.05h1.42v4.555H337.7Z" transform="translate(-309.276 -194.063)" fill="#30323d"/>
</svg> */}

          <h1 className=' hidden lg:block'>Call History</h1>
</div>
        </Link>

        <Link href={"/callers"} className=''>
<div className={`${
          "/callers" === pathname
            ? ' text-[#0D4D8D]'
            : 'text-black'
        } flex items-center gap-3`}>

          <FaUser  className=' min-w-[24px] min-h-[24px]' />

          {/* <svg id="Group_4" data-name="Group 4" xmlns="http://www.w3.org/2000/svg" width="26.927" height="28.501" viewBox="0 0 34.927 35.501">
  <path id="Path_14" data-name="Path 14" d="M380.8,111.623h-.951c-4.8,0-9.6-.012-14.4.014a1.88,1.88,0,0,1-1.552-.664c-.573-.64-1.2-1.231-1.818-1.832-1.691-1.649-3.415-1.65-5.134-.012-.119.113-.243.223-.527.482l-3.4-3.36a14.79,14.79,0,0,1,1.768-1.083c1.366-.581,2.776-1.062,4.147-1.633a1.915,1.915,0,0,0,.807-2.562,1.411,1.411,0,0,1-.1-.17c-.949-2.288-1.95-4.557-2.814-6.877-.268-.72-.462-1.634.525-2.195.134-.076.118-.538.067-.8-1.037-5.448,4.515-10.675,9.821-9.218a5.122,5.122,0,0,1,1.62.718,17.616,17.616,0,0,1,3.182,2.582,5.777,5.777,0,0,1,1.088,2.784,13.533,13.533,0,0,1-.1,3.059,2.862,2.862,0,0,0,.211,1.864c.594,1.041-.555,4.1-1.589,4.785a1.516,1.516,0,0,0-.433.69c-.339.821-.583,1.688-.989,2.472a2.086,2.086,0,0,0,1.067,3.113c1.951.716,3.914,1.416,5.907,2C380.066,106.626,381.309,108.519,380.8,111.623Z" transform="translate(-345.984 -81.466)" fill="#30323d"/>
  <path id="Path_15" data-name="Path 15" d="M335.906,129.841c-.014-1.393,1.743-3.82,2.885-4.007a1.878,1.878,0,0,1,1.318.438,26.646,26.646,0,0,1,2.188,2.154,1.352,1.352,0,0,1,.016,2.166c-.108.125-.227.24-.342.358-1.307,1.336-1.318,1.344-.175,2.881a13.96,13.96,0,0,0,4.283,3.918.875.875,0,0,0,1.283-.159c2.242-2.5,2.47-1.717,4.254.062,2.119,2.114,2.084,2.085.082,4.213a3.485,3.485,0,0,1-3.947.991,17.991,17.991,0,0,1-8.708-6.271,14.84,14.84,0,0,1-3.01-5.959C335.962,130.306,335.927,129.977,335.906,129.841Z" transform="translate(-335.906 -107.59)" fill="#30323d"/>
</svg> */}

          <h1 className=' hidden lg:block'>Callers</h1>
</div>
        </Link>


              <Link href={"/members"} className=''>
<div className={`${
          "/members" === pathname
            ? ' text-[#0D4D8D]'
            : 'text-black'
        } flex items-center gap-3`}>

          <FaRegUser className=' min-w-[24px] min-h-[24px]' />
          <h1 className=' hidden lg:block'>Members</h1>
</div>
        </Link>


        <Link href={"/dispatchers"} className=''>
<div className={`${
          "/dispatchers" === pathname
            ? ' text-[#0D4D8D]'
            : 'text-black'
        } flex items-center gap-3`}>

          <FaHeadset className=' min-w-[24px] min-h-[24px]' />
          <h1 className=' hidden lg:block'>Dispatchers</h1>
</div>
        </Link>


        <Link href={"/admin-setting"} className=''>
<div className={`${
          "/admin-setting" === pathname
            ? ' text-[#0D4D8D]'
            : 'text-black'
        } flex items-center gap-3`}>

          <MdDashboard className=' min-w-[24px] min-h-[24px]' />
          <h1 className=' hidden lg:block'>Dashboard & <br/> <span>reports</span></h1>
</div>
        </Link>


       


        <Link href={"/logs"} className=''>
<div className={`${
          "/logs" === pathname
            ? ' text-[#0D4D8D]'
            : 'text-black'
        } flex items-center gap-3`}>

          <BiMessageSquareDetail className=' min-w-[24px] min-h-[24px]' />
          <h1 className=' hidden lg:block'>Logs</h1>
</div>
        </Link>

        <Link href={"/dashboard-reports"} className=''>
<div className={`${
          "/dashboard-reports" === pathname
            ? ' text-[#0D4D8D]'
            : 'text-black'
        } flex items-center gap-3`}>

          <IoSettingsSharp className=' min-w-[24px] min-h-[24px]' />
          <h1 className=' hidden lg:block'>Admin Settings </h1>
</div>
        </Link>
      </div>


      <div className='flex flex-col gap-5 fixed top-[88%] font-medium text-[12px]'>

      <Link href={"/support-chat"} className=''>
<div className={`${
          "/support-chat" === pathname
            ? ' text-[#0D4D8D]'
            : 'text-black'
        } flex items-center gap-3`}>

          <RiMessage2Fill className=' min-w-[24px] min-h-[24px]' />
          <h1 className=' hidden lg:block'>Support Chat</h1>
</div>
        </Link>

        <Link href={"/my-account"} className=''>
<div className={`${
          "/my-account" === pathname
            ? ' text-[#0D4D8D]'
            : 'text-black'
        } flex items-center gap-3`}>

          <ImUser className=' min-w-[24px] min-h-[24px]' />
          <h1 className=' hidden lg:block'>My Account</h1>
</div>
        </Link>
      </div>
    </div>


  </>
};

export default Sidebar;
{/* <div
className={`h-[94vh]  w-[70px] md:w-[250px] ${isMobileWidth ? 'w-[440px] absolute sm:relative ' : ''
  } bg-[#F5F5F5] text-white  transition-all duration-300 ease-in-out`}
> */}