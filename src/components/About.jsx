import React from 'react'

function About() {
  return (
    <div  data-scroll data-scroll-speed=''   className='w-full pt-20 pb-20 pr-20 pl-12 bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl text-black'>
        <h1 className='pr-40 font-nanum text-5xl leading-[3.5rem] -tracking-wide '>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.

        </h1>
        <div className=" flex gap-5 *:w-full border-t-[1px] pt-10 mt-20 border-[#b7ca78]"> 
            <div className='w-1/2 '>
                <h1 className='text-6xl font-light'>  Our approach:</h1>
                <button className='px-8 py-4 bg-zinc-900 mt-7 rounded-full text-white flex justify-between items-center gap-6'> 
                    <div>
                        Read More
                    </div>
                    <div className='w-3 h-3 bg-zinc-200 rounded-full'>

                    </div>

                </button>

            </div>
            <div className="w-1/2 h-[70vh] bg-[#c1d28a] rounded-3xl" ></div>
        </div>
    </div>
  )
}

export default About