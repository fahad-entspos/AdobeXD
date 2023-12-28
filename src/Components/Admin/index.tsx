"use client"
import Image from 'next/image'
import { BiSolidDownArrow } from "react-icons/bi";


function Admin() {
  
    
  return <>
  
  <div className="w-full h-full  relative transition-all duration-1000 ease-in-out pb-6">
  <div className="absolute inset-0">

<Image
     src="/Logo.png" // Replace with the actual path to your image
     alt="Description of the image"
     width={700} // Replace with the actual width of your image
     height={700} // Replace with the actual height of your image
     className=" mt-16 transition-all  duration-1000 ease-in-out  lg:mt-0 mx-auto my-auto opacity-10 object-cover"
   />
   </div>
  <div className='flex justify-center re gap-10 flex-wrap mt-6 flex-row relative'>

  
<div className=' bg-white transition-all duration-1000 ease-in-out flex  flex-col justify-center  items-center  border shadow-md  rounded-xl w-[250px] h-[100px]  '>
  <h1>56</h1>
  <u>Active Members</u>
</div>


<div className='bg-white transition-all duration-1000 ease-in-out shadow-lg flex flex-col items-center border justify-center rounded-xl w-[250px] h-[100px]'>
<h1>18</h1>
<u> Active Dispatchers</u>
</div>



<div className=' bg-white transition-all duration-1000 ease-in-out shadow-lg flex flex-col items-center border justify-center rounded-xl w-[250px] h-[100px]'>
  <h1>12</h1>
  <u>Active  Locations</u>
</div>


<div className='bg-white transition-all duration-1000 ease-in-out shadow-lg flex flex-col items-center border justify-center rounded-xl w-[250px] h-[100px] '>
  <h1>2</h1>
  <u> Pending Members</u>
</div>
</div>
<div className='flex  justify-center gap-12 mt-6 flex-wrap relative'>
<div>
<div className='bg-white  flex  flex-col  transition-all duration-1000 ease-in-out  justify-around px-4 border   shadow-md  rounded-xl w-[220px] h-[80px]  '>
  <div className='flex justify-between items-center'>

  <h1 className='font-bold text-[#5B5964]'>Date Range</h1>
  <BiSolidDownArrow/>
  </div>
  <div className='flex items-center justify-between'>

<h1 className='font-semibold text-[#276DA4]'>5/19/2023</h1>
<h1 className='font-semibold text-[#276DA4]'>-</h1>
<h1 className='font-semibold text-[#276DA4]'>5/19/2023</h1>
</div>
</div>
</div>
<div className='bg-white  flex   flex-row justify-around  items-center transition-all duration-1000 ease-in-out text-center border shadow-md  rounded-xl h-[80px]  w-[220px]  md:w-[450px]  md:h-[80px] overflow-hidden '>
<div >
  <h1 className='font-bold text-[#5B5964] text-base'>Todays Calls</h1>
  <h1  className='font-semibold text-[#276DA4] text-2xl'>175</h1>
</div>
<div className='w-1 h-[80px] bg-[#5B5964]'>

</div>
<div >
  <h1 className='font-bold text-[#5B5964] text-base'>Call History</h1>
  <h1  className='font-semibold text-[#276DA4] text-2xl'>58,654</h1>
</div>
</div>
<div>
<div className='bg-white  flex  flex-col    justify-around px-4 border transition-all duration-1000 ease-in-out  shadow-md  rounded-xl w-[220px] h-[80px]  '>
  <div className='flex justify-between items-center'>

  <h1 className='font-bold text-[#5B5964]'>Location</h1>
  <BiSolidDownArrow/>
  </div>

<h1 className='font-semibold text-[#276DA4]'>Lakewood</h1>

</div>
</div>
</div>
<div className="flex justify-around items-center gap-12 flex-wrap mt-4 pb-10">

<div className="mx-auto w-1/3 overflow-hidden md:w-1/3 transition-all duration-1000 ease-in-out">
    <h1 className="font-bold text-xs sm:text-xl">Calls By Location:</h1>
    <Image
className='mt-12 transition-all duration-1000 ease-in-out'
      src="/sfdsdfsd.png"
      width={300}
      height={300}
      alt="error"
    />
</div>
<div className="mx-auto w-1/3 overflow-hidden md:w-1/3">
<h1 className="font-bold text-xs sm:text-xl">Calls By Call Type:</h1>

<Image
className='mt-12 transition-all duration-1000 ease-in-out'
      src="/OBJECTS.png"
      width={300}
      height={300}
      alt="error"
    />



</div>
</div>
  </div>
  
  </>
}

export default Admin