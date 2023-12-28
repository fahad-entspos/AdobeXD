import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { MdFormatLineSpacing } from "react-icons/md";
import { AiFillAlipayCircle } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaUser } from "react-icons/fa6";
import { BsFillPencilFill } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoCallSharp } from "react-icons/io5";
import { AiFillChrome } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa6";
import { FaCalendarPlus } from "react-icons/fa6";
import { MdOutlineSort } from "react-icons/md";
function Members() {
  return <>
  
  <div>

    
      <header className="flex flex-col bg-[#F5F5F5]  py-2 transition-all duration-1000 ease-in-out border-t-8 border-white ">
        <header className="flex flex-wrap  items-center gap-4 border-b-2 px-4 py-2 transition-all duration-1000 ease-in-out">
          <h1 className="text-[#707070]  ">Filters:</h1>
          <button className="flex flex-row gap-2 py-1 px-3 text-xs text-[#4D5061] font-semibold  border-2 rounded-full items-center">
            Supervisors
            <RxCross2 />
          </button>
          <button className="flex flex-row gap-2 py-1 px-3 text-xs text-[#4D5061] font-semibold  border-2 rounded-full items-center">
            Pending Approval <RxCross2 />
          </button>
        </header>
        <nav className="flex justify-between items-center px-4 mt-2 flex-wrap transition-all duration-1000 ease-in-out">
          <div className="flex flex-row gap-4 transition-all duration-1000 ease-in-out">
            <h1 className="text-[#707070] font-light font-roboto text-sm lg:text-2xl">
              223 Members
            </h1>
            <div className="flex flex-col transition-all duration-1000 ease-in-out ">
              <FaPlus className="mx-auto text-[#707070]" />
              <h1 className="text-[9px] text-[#707070]">Add</h1>
            </div>

            <div className="flex flex-col  transition-all duration-1000 ease-in-out">
              <BsFillPencilFill className="mx-auto text-[#707070]" />
              <h1 className="text-[9px] text-[#707070]">Label</h1>
            </div>

            <div className="flex flex-col  transition-all duration-1000 ease-in-out">
              <FaRegEdit className="mx-auto text-[#707070]" />
              <h1 className="text-[9px] text-[#707070]">Edit</h1>
            </div>

            <div className="flex flex-col  transition-all duration-1000 ease-in-out">
              <MdDelete className="mx-auto h-4 w-4 text-[#707070]" />
              <h1 className="text-[9px]  text-[#707070]">Delete</h1> 
            </div>
          </div>
          <div className="flex flex-wrap gap-3 transition-all duration-1000 ease-in-out">
            <button className="flex flex-row gap-1 py- px-3 text-xs text-[#676467] font-medium font-roboto  border-2 rounded-sm items-center">
              Role
              <TiArrowSortedDown className="w-6 h-6" />
            </button>
            <button className="flex flex-row gap-1 py- px-3 text-xs text-[#676467] font-medium font-roboto  border-2 rounded-sm items-center">
              Label
              <TiArrowSortedDown className="w-6 h-6" />
            </button>
            <button className="flex flex-row gap-1 py- px-3 text-xs text-[#676467] font-medium font-roboto  border-2 rounded-sm items-center">
              Location
              <TiArrowSortedDown className="w-6 h-6" />
            </button>
            <button className="flex flex-row gap-1 py- px-3 text-xs text-[#676467] font-medium font-roboto  border-2 rounded-sm items-center">
              More Filters
              <TiArrowSortedDown className="w-6 h-6" />
            </button>
          </div>
          {/* hidden lg:block */}
          <div className="flex flex-col text-[#676467] items-center hidden lg:block">
            <MdOutlineSort  className="mx-auto text-[#676467] h-6 w-6" />
            <h1  className="text-[9px]  text-[#707070] text-center items-center font-roboto">Sort</h1>
          </div>
        </nav>
      </header>

<div className="flex flex-wrap justify-center ">

<div className="flex flex-col  w-full xl:w-3/5 transition-all duration-1000 ease-in-out h-[610px]  overflow-y-auto overflow-x-hidden pt-2">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light transition-all duration-1000 ease-in-out mx-auto">
          <tbody>
         
            <tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr>   <tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr> <tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr> <tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr> <tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr> <tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr> <tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr> <tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr> <tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr> <tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr> <tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr><tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr><tr className="border-b flex items-center justify-between flex-wrap  pl-2 md:pl-8">
              <td className="flex items-center font-medium gap-1 md:gap-4 text-" style={{ flex: '1 1 35%', maxWidth: '35%' }}>
                <div className="border-2 border-[#B1AEAE] py-1 px-1">
              <FaUser className="w-7 h-7 text-[#B1AEAE]" />

                </div>
                <div className="">
                  <div className="font-medium text-gray-700 text-[8px] truncate">Unit #126</div>
                  <div className="text-[#707070] font-bold text-[9px] sm:text-[12px] truncate ">Usher Ungar</div>
                </div>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 15%', maxWidth: '15%' }}>
                <h1 className="text-[11px] truncate">845-350-2765</h1>
                <h1 className="text-[11px] truncate">Williamsburg Member</h1>
              </td>
              <td className="p-1 text-" style={{ flex: '1 1 25%', maxWidth: '20%' }}>
                <h1 className="text-[10px] truncate">2,000 Responded Calls</h1>
                <h1 className="text-[10px] truncate">Member Since Jan, 2, 2018</h1>
              </td>
              <td className="p-2" style={{ flex: '1 1 20%', maxWidth: '25%' }}>
                <button className="py-1 px-3 text-xs text-[#4D5061] font-semibold border-2 rounded-full items-center">
                  Admin
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>









      <aside className="w-full xl:w-2/5 border-l-0 xl:border-l-2 transition-all duration-1000 ease-in-out ">
        <div className="flex flex-col gap-1 ">

      
          <h1 className=" text-[#0D4D8D] text-lg font-semibold mt-3 px-5">
            Member Details
          </h1>
          <hr className="mb-2"/>
          <FaUserTie className="w-16 h-16 mx-auto" />
          <hr className="mt-2" />
          <div className="flex flex-col gap-3 px-5">
            <h1 className="text-[#0D4D8D] font-roboto ">Unit #42</h1>
            <h1 className="font-roboto ">Chaim Fixler</h1>
            <h1 className="font-roboto text-xs text-[#30323D]">Admin . (Achi)</h1>
          </div>
          <hr className="mt-1" />
          </div>
          <div className="flex flex-col gap-3 px-5 pt-2">
            <th className="flex gap-6 items-center text-[#30323D]">
              <FaUser />
              <div className="text-sm  text-[#30323D] font-medium font-roboto">Contact Details</div>
            </th>
            <th className="flex gap-6 items-center text-start text-[#30323D]">
              <IoCallSharp className="w-6 h-6" />
              <div className="text-sm">
                <div className="font-medium text-gray-700">PHone:</div>
                <div className="text-[#30323D] font-medium font-roboto">+1 (845) 845-2765</div>
              </div>
            </th>
            <th className="flex gap-6 items-center text-start text-[#30323D]">
              <FaMessage  className="w-6 h-6" />
              <div className="text-sm">
                <div className="font-medium text-gray-700">E-Mail:</div>
                <div className="text-[#30323D] font-medium ">info@chavivim.org</div>
              </div>
            </th>
          </div>
 
          <section>
<div className="flex flex-col gap-4 pt-1">
          <hr  className=""/>
            <div className="flex items-center justify-between px-5">
              <div className="flex gap-3 items-center text-gray-900">
                <FaCalendarPlus className="w-4 h-4" />{" "}
                <p className=" text-[#30323D] font-medium ">C20 Boosts</p>
              </div>{" "}
              <BiSolidRightArrow />
            </div>

            <hr  className=""/>
            <div className="flex items-center justify-between px-5">
              <div className="flex gap-3 items-center text-gray-900">
                <AiFillChrome />{" "}
                <p className=" text-[#30323D] font-medium ">18 Flats</p>
              </div>{" "}
              <BiSolidRightArrow />
            </div>

            <hr  className=""/>

            <div className="flex items-center justify-between px-5">
              <div className="flex gap-3 items-center text-gray-900">
                <AiFillAlipayCircle />{" "}
                <p className=" text-[#30323D] font-medium ">375 Hours Of Drive</p>
              </div>{" "}
              <BiSolidRightArrow />
            </div>

            <hr  className=""/>

            <div className="flex items-center justify-between px-5 mb-2">
              <div className="flex gap-3 items-center text-gray-900">
                <AiFillAlipayCircle />{" "}
                <p className=" text-[#30323D] font-medium ">375 Hours Of Drive</p>
              </div>{" "}
              <BiSolidRightArrow />
            </div>

</div>
          </section>
           
        </aside>


      </div>


      </div>
  
  </>
}

export default Members