import { motion } from 'framer-motion';
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Landing = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.8' className='w-full h-screen pt-1'>
        
        <div className='textstructure mt-52 px-20'>

            {["we create", "eye-opening", "presentations"].map((item, index )=> (
                <div key={index} className='masker ' >
                    <div className='w-fit flex items-end overflow-hidden '>
                        

                    {index === 1 && (
                        <motion.div 
                        initial={{width: 0}}
                         animate={{width: "9vw"}}
                         transition={{ease:[ 0.76, 0, 0.24, 1], duration: 0.8}}  className='mr-5 w-[10.8vw] h-[7vw] -top-[1vw] rounded-lg relative bg-green-500'></motion.div> //easings.net
                        )}
                    <h1 className='pt-[1vw] uppercase text-[10vw] font-bebas  leading-[.75] tracking-normal '>{item}</h1>

                    </div>
                </div>
                

            ))}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=> (
                <p className='text-md font-light tracking-light leading-none'>{item}</p>
            ))}
            <div className='start flex gap-1'>
                <div className='px-3 py-1 border-[2px] border-zinc-600 rounded-full font-light text-xs uppercase flex justify-center items-center'>start the project</div>
                <div className='h-9 w-9 border-[2px] border-zinc-600 rounded-full flex text-lg items-center justify-center'>
                <GoArrowUpRight />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Landing