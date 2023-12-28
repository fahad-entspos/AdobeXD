"use client"
import React from 'react'
import { useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import { AiFillAlert } from "react-icons/ai";
function CallHistory() {

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section: any) => {
    setActiveSection(activeSection === section ? null : section);
  };


  return <>

    <div className=' w-full flex justify-around gap-8 flex-wrap rounded-lg bg-[#F4F4F4]  py-6 border-[6px] border-white pb-8'>
      {/* section 1 */}
      <div className='flex  flex-col gap-28  mt-6 '>
        <div className=" w-[18rem] sm:w-[30rem] transition-all duration-1000 ease-in-out ">
          <div
            onClick={() => toggleSection('section1')}
            className="cursor-pointer border-b  transition duration-1000 ease-in-out transform hover:bg-gray-100"
          >
            <div className="flex items-center justify-between">
              <span className='text-[#4D5061] font-semibold'>Monroe</span>
              <BiSolidDownArrow className={`fill-current h-4 w-4 ${activeSection === 'section1' ? 'transform rotate-180' : ''
                } transition-transform duration-300 ease-in-out`} />

            </div>
            <div
              className={`mt-2 transition-max-height duration-300 ease-in-out overflow-hidden ${activeSection === 'section1' ? 'max-h-60' : 'max-h-0'
                }`}
            >
              <div className=''>
                <div className=' '>
                  <div className='bg-white px-2 rounded-lg mt-2 py-2'>
                    <div className='flex items-center justify-between pt-2'>

                      <div className='flex items-center '>
                        <AiFillAlert className="text-red-700 w-6 h-6" />
                        <AiFillAlert className="text-red-700 w-6 h-6" />
                        <button type="button" className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[7px] rounded-full px-0  md:px-2 py-0 md:py-1  transition-all duration-1000">2nd Request</button>

                        <button type="button" className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[7px] rounded-full  px-0 ml-[2px]  md:px-2 md:py-1  transition-all duration-1000"> Request</button>

                      </div>

                      <button type="button" className="focus:outline-none  text-[#4D5061] bg-[#CDD1C4]  font-bold text-[8px] rounded-full  px-2 py-1  transition-all duration-1000">#1105589 Apr 6, 2022, 5:17 PM</button>
                    </div>

                    <div className='flex items-center justify-between mt-2'>
                      <h1 className='text-black font-bold sm:text-[14px] text-[8px]'>
                        40 Bruckner BLVD Monroe NY 1121 Apt #3-R
                      </h1>
                      <h1 className='text-[#CDD1C4] text-[8px]'>CAR TYPE</h1>
                    </div>



                    <div className='flex items-center justify-between mt-1'>
                      <h1 className='text-[#A0A596] font-bold sm:text-[16px] text-[8px]'>
                        D#17
                      </h1>
                      <h1 className='text-[#A0A596] sm:text-[14px] text-[8px] '>House Lockout - Person Involved </h1>
                      <div>
                        <h1 className='text-[#30323D] font-bold  sm:text-[14px] text-[8px]'> Ford Explorer </h1>
                        <h1 className='text-[#A0A596] font-bold  sm:text-[9px] text-[8px]'> CALL BACK NUMBER </h1>
                        <h1 className='text-[#5C80BC]  font-bold  sm:text-[11px] text-[8px]'> 845.222.5555</h1>
                      </div>
                    </div>

                    <div className='flex gap-2'>
                      <div>
                        <h1 className='text-[#9DA292] text-[8px]'>
                          DISPATCHER NOTE
                        </h1>
                        <h1 className='text-[#30323D] font-bold text-[10px]'>
                          Has a spare tire        </h1>
                      </div>
                      <h1 className='text-[#9DA292] text-[8px]'>
                        DISPATCHER NOTE      </h1>
                    </div>
                    <div className='flex justify-between items-center'>

                      <div className='flex justify-between '>

                        <div className='flex gap-1 '>
                          <u className='text-xs text-[#5C80BC]'>#42</u>
                          <u className='text-xs text-[#5C80BC]'>#126</u>
                          <u className='text-xs text-[#5C80BC]'>+ 4 More</u>
                          <u className='text-xs text-[#5C80BC]'>Unlimited</u>
                        </div>
                      </div>

                      <button type="button" className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[12px] rounded-full  px-6 py-1  transition-all duration-1000">Assign</button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>


        <div className=" w-[18rem] sm:w-[30rem] transition-all duration-1000 ease-in-out ">
          <div
            onClick={() => toggleSection('section129')}
            className="cursor-pointer border-b  transition duration-1000 ease-in-out transform hover:bg-gray-100"
          >
            <div className="flex items-center justify-between">
              <span className='text-[#4D5061] font-semibold'>Monroe</span>
              <BiSolidDownArrow className={`fill-current h-4 w-4 ${activeSection === 'section129' ? 'transform rotate-180' : ''
                } transition-transform duration-300 ease-in-out`} />

            </div>
            <div
              className={`mt-2 transition-max-height duration-300 ease-in-out overflow-hidden ${activeSection === 'section129' ? 'max-h-60' : 'max-h-0'
                }`}
            >
              <div className=''>
                <div className=' '>
                  <div className='bg-white px-2 rounded-lg mt-2 py-2'>
                    <div className='flex items-center justify-between pt-2'>

                      <div className='flex items-center '>
                        <AiFillAlert className="text-red-700 w-6 h-6" />
                        <AiFillAlert className="text-red-700 w-6 h-6" />
                        <button type="button" className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[7px] rounded-full px-0  md:px-2 py-0 md:py-1  transition-all duration-1000">2nd Request</button>

                        <button type="button" className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[7px] rounded-full  px-0 ml-[2px]  md:px-2 md:py-1  transition-all duration-1000"> Request</button>

                      </div>

                      <button type="button" className="focus:outline-none  text-[#4D5061] bg-[#CDD1C4]  font-bold text-[8px] rounded-full  px-2 py-1  transition-all duration-1000">#1105589 Apr 6, 2022, 5:17 PM</button>
                    </div>

                    <div className='flex items-center justify-between mt-2'>
                      <h1 className='text-black font-bold sm:text-[14px] text-[8px]'>
                        40 Bruckner BLVD Monroe NY 1121 Apt #3-R
                      </h1>
                      <h1 className='text-[#CDD1C4] text-[8px]'>CAR TYPE</h1>
                    </div>



                    <div className='flex items-center justify-between mt-1'>
                      <h1 className='text-[#A0A596] font-bold sm:text-[16px] text-[8px]'>
                        D#17
                      </h1>
                      <h1 className='text-[#A0A596] sm:text-[14px] text-[8px] '>House Lockout - Person Involved </h1>
                      <div>
                        <h1 className='text-[#30323D] font-bold  sm:text-[14px] text-[8px]'> Ford Explorer </h1>
                        <h1 className='text-[#A0A596] font-bold  sm:text-[9px] text-[8px]'> CALL BACK NUMBER </h1>
                        <h1 className='text-[#5C80BC]  font-bold  sm:text-[11px] text-[8px]'> 845.222.5555</h1>
                      </div>
                    </div>

                    <div className='flex gap-2'>
                      <div>
                        <h1 className='text-[#9DA292] text-[8px]'>
                          DISPATCHER NOTE
                        </h1>
                        <h1 className='text-[#30323D] font-bold text-[10px]'>
                          Has a spare tire        </h1>
                      </div>
                      <h1 className='text-[#9DA292] text-[8px]'>
                        DISPATCHER NOTE      </h1>
                    </div>
                    <div className='flex justify-between items-center'>

                      <div className='flex justify-between '>

                        <div className='flex gap-1 '>
                          <u className='text-xs text-[#5C80BC]'>#42</u>
                          <u className='text-xs text-[#5C80BC]'>#126</u>
                          <u className='text-xs text-[#5C80BC]'>+ 4 More</u>
                          <u className='text-xs text-[#5C80BC]'>Unlimited</u>
                        </div>
                      </div>

                      <button type="button" className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[12px] rounded-full  px-6 py-1  transition-all duration-1000">Assign</button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>




        <div className=" w-[18rem] sm:w-[30rem] transition-all duration-1000 ease-in-out ">
          <div
            onClick={() => toggleSection('section1290')}
            className="cursor-pointer border-b  transition duration-1000 ease-in-out transform hover:bg-gray-100"
          >
            <div className="flex items-center justify-between">
              <span className='text-[#4D5061] font-semibold'>Monroe</span>
              <BiSolidDownArrow className={`fill-current h-4 w-4 ${activeSection === 'section1290' ? 'transform rotate-180' : ''
                } transition-transform duration-300 ease-in-out`} />

            </div>
            <div
              className={`mt-2 transition-max-height duration-300 ease-in-out overflow-hidden ${activeSection === 'section1290' ? 'max-h-60' : 'max-h-0'
                }`}
            >
              <div className=''>
                <div className=' '>
                  <div className='bg-white px-2 rounded-lg mt-2 py-2'>
                    <div className='flex items-center justify-between pt-2'>

                      <div className='flex items-center '>
                        <AiFillAlert className="text-red-700 w-6 h-6" />
                        <AiFillAlert className="text-red-700 w-6 h-6" />
                        <button type="button" className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[7px] rounded-full px-0  md:px-2 py-0 md:py-1  transition-all duration-1000">2nd Request</button>

                        <button type="button" className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[7px] rounded-full  px-0 ml-[2px]  md:px-2 md:py-1  transition-all duration-1000"> Request</button>

                      </div>

                      <button type="button" className="focus:outline-none  text-[#4D5061] bg-[#CDD1C4]  font-bold text-[8px] rounded-full  px-2 py-1  transition-all duration-1000">#1105589 Apr 6, 2022, 5:17 PM</button>
                    </div>

                    <div className='flex items-center justify-between mt-2'>
                      <h1 className='text-black font-bold sm:text-[14px] text-[8px]'>
                        40 Bruckner BLVD Monroe NY 1121 Apt #3-R
                      </h1>
                      <h1 className='text-[#CDD1C4] text-[8px]'>CAR TYPE</h1>
                    </div>



                    <div className='flex items-center justify-between mt-1'>
                      <h1 className='text-[#A0A596] font-bold sm:text-[16px] text-[8px]'>
                        D#17
                      </h1>
                      <h1 className='text-[#A0A596] sm:text-[14px] text-[8px] '>House Lockout - Person Involved </h1>
                      <div>
                        <h1 className='text-[#30323D] font-bold  sm:text-[14px] text-[8px]'> Ford Explorer </h1>
                        <h1 className='text-[#A0A596] font-bold  sm:text-[9px] text-[8px]'> CALL BACK NUMBER </h1>
                        <h1 className='text-[#5C80BC]  font-bold  sm:text-[11px] text-[8px]'> 845.222.5555</h1>
                      </div>
                    </div>

                    <div className='flex gap-2'>
                      <div>
                        <h1 className='text-[#9DA292] text-[8px]'>
                          DISPATCHER NOTE
                        </h1>
                        <h1 className='text-[#30323D] font-bold text-[10px]'>
                          Has a spare tire        </h1>
                      </div>
                      <h1 className='text-[#9DA292] text-[8px]'>
                        DISPATCHER NOTE      </h1>
                    </div>
                    <div className='flex justify-between items-center'>

                      <div className='flex justify-between '>

                        <div className='flex gap-1 '>
                          <u className='text-xs text-[#5C80BC]'>#42</u>
                          <u className='text-xs text-[#5C80BC]'>#126</u>
                          <u className='text-xs text-[#5C80BC]'>+ 4 More</u>
                          <u className='text-xs text-[#5C80BC]'>Unlimited</u>
                        </div>
                      </div>

                      <button type="button" className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[12px] rounded-full  px-6 py-1  transition-all duration-1000">Assign</button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* section 2 */}
      <div className='flex  flex-col gap-6 mt-4 pb-8'>
        <div className="bg-white w-[18rem] sm:w-[30rem] px-2 rounded-lg mt-2 transition-all duration-1000 ease-in-out  shadow py-2">
          <div className="flex items-center justify-between pt-2">
            <h1 className="text-black font-bold text-xs">
              40 Bruckner BLVD Monroe NY 1121 Apt #3-R
            </h1>
            <button
              type="button"
              className="focus:outline-none  text-[#4D5061] bg-[#CDD1C4]  font-bold text-[8px] rounded-full   px-2 py-1  transition-all duration-1000"
            >
              #1105589 Apr 6, 2022, 5:17 PM
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-[#9DA292] font-semibold text-[12px]">
              Dispatcher #17{" "}
            </h1>
            <h1 className="text-[#9DA292] font-semibold text-[12px]">
              House Lockout-Persons Involved{" "}
            </h1>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex justify-between">
              <div className="flex gap-3 ">
                <u className="text-xs text-[#5C80BC]">#42</u>
                <u className="text-xs text-[#5C80BC]">#126</u>
                <u className="text-xs text-[#5C80BC]">+ 4 More</u>
              </div>
            </div>
            <button
              type="button"
              className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[12px] rounded-full  px-6 py-1  transition-all duration-1000"
            >
              Assign
            </button>
          </div>
        </div>
        <div className=' rounded-lg bg-white w-[18rem] mt-10 sm:w-[30rem]  overflow-y-auto h-56'>
          <div className="w-4/5 mx-auto  transition-all duration-1000 ease-in-out ">
            <div
              onClick={() => toggleSection("section222")}
              className="cursor-pointer border-b  transition duration-1000 ease-in-out transform "
            >
              <div className="flex items-center justify-between">
                <span  className='text-[#4D5061] font-semibold mt-8'>In Progress</span>
                <BiSolidDownArrow
                  className={`fill-current h-4 w-4 ${activeSection === "section222" ? "transform rotate-180" : ""
                    } transition-transform duration-300 ease-in-out`}
                />
              </div>
              <div
                className={`mt-2 transition-max-height duration-300 ease-in-out overflow-hidden ${activeSection === "section222" ? "max-h-96" : "max-h-0"
                  }`}
              >
                <div className="bg-white px-2 rounded-lg mt-2 py-2">
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="focus:outline-none border-2 border-[#4D5061]  className='text-[#4D5061] font-semibold' bg-white  font-bold text-[8px] rounded-full  px-2 py-1  transition-all duration-1000"
                      >
                        Interstate
                      </button>
                      <h1 className="text-[#5C80BC]">2</h1>
                      <AiFillAlert className="text-red-700 w-6 h-6" />
                    </div>

                    <button
                      type="button"
                      className="focus:outline-none  text-[#4D5061] bg-[#CDD1C4]  font-bold text-[8px] rounded-full  px-2 py-1  transition-all duration-1000"
                    >
                      #1105589 Apr 6, 2022, 5:17 PM
                    </button>
                  </div>
                  <hr />
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[8px]">LOCATION</h1>
                      <h1 className="text-base font-semibold text-[#30323D] ">Williamsburg</h1>
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[8px]">CALL TYPE</h1>
                      <h1 className="text-base font-semibold text-[#30323D] ">Blowout</h1>
                    </div>
                  </div>

                  <hr />

                  <div className="flex flex-row justify-between ">
                    <h1 className="text-[#5C80BC] text-[10px]">377 Route 59 Monsey NY 10952</h1>
                    <h1 className=" text-[#5C80BC] text-[8px]">SEE LESS</h1>
                  </div>

                  <hr />

                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[10px]">CALL BACK NUMBER</h1>
                      <h1 className=" text-[#5C80BC] text-[15px]">845.222.5555</h1>
                      <h1 className=" text-[#CDD1C4] text-[10px]">DISPATCHER NOTE</h1>
                      <h1 className=" text-[#30323D] font-medium text-[10px]">Has a spare tire</h1>
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[10px]">CAR TYPE</h1>
                      <h1 className=" text-[#30323D] font-medium text-[15px]">Ford Explorer</h1>
                      <h1 className=" text-[#CDD1C4] text-[10px]">DISPATCHER</h1>
                      <u className=" text-[#30323D] text-[10px]">22</u>
                    </div>
                  </div>
                  <hr />

                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-2 ">
                      <u className="text-[#5C80BC] text-[13px]">502, 618, 713</u>
                      <u className=" text-[#5C80BC] text-[13px]">Request backup</u>
                    </div>

                    <button
                      type="button"
                      className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[12px] rounded-full  px-6 py-1  transition-all duration-1000"
                    >
                      complete
                    </button>
                  </div>
                </div>
                <div className="bg-white px-2 rounded-lg mt-2 py-2">
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[8px] rounded-full  px-2 py-1  transition-all duration-1000"
                      >
                        Interstate
                      </button>
                      <h1 className="text-[#5C80BC]">2</h1>
                      <AiFillAlert className="text-red-700 w-6 h-6" />
                    </div>

                    <button
                      type="button"
                      className="focus:outline-none  text-[#4D5061] bg-[#CDD1C4]  font-bold text-[8px] rounded-full  px-2 py-1  transition-all duration-1000"
                    >
                      #1105589 Apr 6, 2022, 5:17 PM
                    </button>
                  </div>
                  <hr />
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[8px]">LOCATION</h1>
                      <h1 className="text-base font-semibold text-[#30323D] ">Williamsburg</h1>
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[8px]">CALL TYPE</h1>
                      <h1 className="text-base font-semibold text-[#30323D] ">Blowout</h1>
                    </div>
                  </div>

                  <hr />

                  <div className="flex flex-row justify-between ">
                    <h1 className="text-[#CDD1C4] text-[10px]">377 Route 59 Monsey NY 10952</h1>
                    <h1 className=" text-[#30323D] text-[10px]">SEE LESS</h1>
                  </div>

                  <hr />

                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[10px]">CALL BACK NUMBER</h1>
                      <h1 className=" text-[#30323D] text-[15px]">845.222.5555</h1>
                      <h1 className=" text-[#30323D] text-[10px]">DISPATCHER NOTE</h1>
                      <h1 className=" text-[#30323D] text-[10px]">Has a spare tire</h1>
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[10px]">CAR TYPE</h1>
                      <h1 className=" text-[#30323D] text-[15px]">Ford Explorer</h1>
                      <h1 className=" text-[#30323D] text-[10px]">DISPATCHER</h1>
                      <h1 className=" text-[#30323D] text-[10px]">22</h1>
                    </div>
                  </div>
                  <hr />

                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-2 ">
                      <u className="text-[#5C80BC] text-[13px]">502, 618, 713</u>
                      <u className=" text-[#5C80BC] text-[13px]">Request backup</u>
                    </div>

                    <button
                      type="button"
                      className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[12px] rounded-full  px-6 py-1  transition-all duration-1000"
                    >
                      complete
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="w-4/5 mx-auto mt-20 transition-all duration-1000 ease-in-out py-2">
            <div
              onClick={() => toggleSection("section112")}
              className="cursor-pointer border-b  transition duration-1000 ease-in-out transform "
            >
              <div className="flex items-center justify-between">
                <span  className='text-[#4D5061] font-semibold'>Compleated</span>
                <BiSolidDownArrow
                  className={`fill-current h-4 w-4 ${activeSection === "section112" ? "transform rotate-180" : ""
                    } transition-transform duration-300 ease-in-out`}
                />
              </div>
              <div
                className={`mt-2 transition-max-height duration-300 ease-in-out overflow-hidden ${activeSection === "section112" ? "max-h-96" : "max-h-0"
                  }`}
              >
                <div className="bg-white px-2 rounded-lg mt-2">
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[8px] rounded-full  px-2 py-1  transition-all duration-1000"
                      >
                        Interstate
                      </button>
                      <h1 className="text-[#5C80BC]">2</h1>
                      <AiFillAlert className="text-red-700 w-6 h-6" />
                    </div>

                    <button
                      type="button"
                      className="focus:outline-none  text-[#4D5061] bg-[#CDD1C4]  font-bold text-[8px] rounded-full  px-2 py-1  transition-all duration-1000"
                    >
                      #1105589 Apr 6, 2022, 5:17 PM
                    </button>
                  </div>
                  <hr />
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[8px]">LOCATION</h1>
                      <h1 className="text-base font-semibold text-[#30323D] ">Williamsburg</h1>
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[8px]">CALL TYPE</h1>
                      <h1 className="text-base font-semibold text-[#30323D] ">Blowout</h1>
                    </div>
                  </div>

                  <hr />

                  <div className="flex flex-row justify-between ">
                    <h1 className="text-[#CDD1C4] text-[10px]">377 Route 59 Monsey NY 10952</h1>
                    <h1 className=" text-[#30323D] text-[10px]">SEE LESS</h1>
                  </div>

                  <hr />

                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[10px]">CALL BACK NUMBER</h1>
                      <h1 className=" text-[#30323D] text-[15px]">845.222.5555</h1>
                      <h1 className=" text-[#30323D] text-[10px]">DISPATCHER NOTE</h1>
                      <h1 className=" text-[#30323D] text-[10px]">Has a spare tire</h1>
                    </div>

                    <div className="flex flex-col gap-2 ">
                      <h1 className="text-[#CDD1C4] text-[10px]">CAR TYPE</h1>
                      <h1 className=" text-[#30323D] text-[15px]">Ford Explorer</h1>
                      <h1 className=" text-[#30323D] text-[10px]">DISPATCHER</h1>
                      <h1 className=" text-[#30323D] text-[10px]">22</h1>
                    </div>
                  </div>
                  <hr />

                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-2 ">
                      <u className="text-[#5C80BC] text-[13px]">502, 618, 713</u>
                      <u className=" text-[#5C80BC] text-[13px]">Request backup</u>
                    </div>

                    <button
                      type="button"
                      className="focus:outline-none border-2 border-[#4D5061] text-[#4D5061] bg-white  font-bold text-[12px] rounded-full  px-6 py-1  transition-all duration-1000"
                    >
                      complete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        

        </div>

      </div>
    </div>

  </>
}

export default CallHistory
