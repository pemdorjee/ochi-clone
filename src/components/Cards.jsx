import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 px-14 flex items-center gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2 '>
            <div className=' relative card flex justify-center items-center w-full h-full  rounded-xl bg-[#004D43]'>
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute left-10 px-5 py-1  text-sm rounded-full border-[#CDEA67] border-[1px] bottom-10 text-[#CDEA67]'>&copy; 2019</button>
            </div>
        </div>
        <div className='cardcontainer2 w-1/2 h-[50vh]  flex gap-5 '>
        <div className='card relative w-1/2 h-full flex justify-center items-center  bg-[#0d1211] rounded-xl'>
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-15 px-5 py-1 text-sm rounded-full border-zinc-50 border-[1px] bottom-10 text-white font-extralight '>RATING 5.0 ON CLUTCH</button>
        </div>
        <div className='relative card w-1/2 h-full flex justify-center items-center bg-[#0d1211] rounded-xl'>
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute left-5 px-5 py-1  text-sm] rounded-full border-zinc-50 border-[1px] bottom-10 text-white font-extralight whitespace-nowrap'>BUSINESS BOOTCAMP ALUMNI</button>
        </div>
        </div>

    </div>
  )
}

export default Cards