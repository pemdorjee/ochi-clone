import React from 'react'
import { motion } from 'framer-motion';

function Marqee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='0.008' className='w-full py-10 rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
        <div className='text border-t-[0.5px] border-b-[0.01vh] border-zinc-300 flex whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='text-[22vw] uppercase text-white font-semibold leading-none font-bebas -mb-[20px] -mt-[9px] tracking-normal pr-20'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='text-[22vw] uppercase text-white font-semibold leading-none font-bebas -mb-[20px] -mt-[9px] tracking-normal pr-20'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 8}} className='text-[22vw] uppercase text-white font-semibold leading-none font-bebas -mb-[20px] -mt-[9px] tracking-normal pr-20'>we are ochi</motion.h1>
        </div>

    </div>
  )
}

export default Marqee