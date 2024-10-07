import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {
    const [hovering, setHovering] = useState(false);
    const [hovering1, setHovering1] = useState(false);
    return (
     
     
    <div className='w-full py-10'>
        <div className='w-full px-20 border-b-[1px] border-x-zinc-700 pb-10'>
            <h1 className='text-5xl font-nanum tracking-tight '> Featured projects</h1> 
           
        </div>
        <div className='px-14'>
        <div className='cards w-full flex gap-3 mt-10'>
            
                <div onMouseEnter={() => setHovering(true)} onMouseLeave={()=> setHovering(false)} className='cardcontainer relative  w-1/2 h-[72vh]  '>

                    <h1 className='absolute flex text-[#CDEA67] z-[9] -translate-x-1/2 -translate-y-1/2 top-1/2 text-8xl font-bebas left-full  overflow-hidden leading-none'>
                    {"FYDE".split ('').map((item, index) => <motion.span className='inline-block '  
                    initial={{y:"100%"}} 
                    animate= {hovering? {y:"0"} : {y: "100%"}} 
                    transition={{ease:[0.22, 1, 0.36, 1], delay: index*0.03}}>
                        {item}</motion.span>)}
                    </h1>
                    <div className='card scale w-full h-full rounded-xl overflow-hidden bg-green-600'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                    </div>
                </div>
                <div onMouseEnter={()=> setHovering1(true)} onMouseLeave={()=> setHovering1(false)} className='cardcontainer relative w-1/2 h-[72vh]  '>
                <h1 className='absolute flex text-[#CDEA67] z-[9] translate-x-1/2 -translate-y-1/2 top-1/2 text-8xl font-bebas right-full overflow-hidden leading-none'>
                    {"VISE".split ('').map((item, index) => <motion.span className='inline-block '  
                    initial={{y:"100%"}} 
                    animate= {hovering1? {y:"0"} : {y: "100%"}} 
                    transition={{ease:[0.22, 1, 0.36, 1], delay: index*0.03  }}>
                        {item}</motion.span>)}
                    </h1>
                    <div className='card scale w-full h-full rounded-xl overflow-hidden bg-green-600'>
                        <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Featured