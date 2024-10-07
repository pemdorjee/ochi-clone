import React, { useEffect, useState } from 'react'



function Eyes() {
    const [rotate1, setRotate1 ]= useState(0);
    const [rotate2, setRotate2 ]= useState(0);
useEffect(() => {
    window.addEventListener("mousemove", (e) => {
        let X = e.clientX;
        let Y = e.clientY;
        let vwValue = 180;
        let deltarX = X- ((window.innerWidth/2)+vwValue)
        let deltalX = X- ((window.innerWidth/2)-vwValue)
        let deltaY = Y- window.innerHeight/2;
        var angleR = Math.atan2(deltaY,deltarX)*(180/Math.PI);
        var angleL = Math.atan2(deltaY,deltalX)*(180/Math.PI);
        setRotate1(angleL-180)
        setRotate2(angleR-180)
        console.log(e)
        
         
    })
})
  return (
    <div className='eyes w-full h-screen  overflow-hidden'>
        <div data-scroll data-scroll-speed='-0.8' className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
            <div  className='absolute flex gap-10 top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%]'>
                    <div data-scroll data-scroll-speed='0.2' className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-white'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 '>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate1}deg)`}}className='line top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] absolute w-full h-10'>
                            <div className='w-7 h-7 rounded-full bg-zinc-100 '>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-scroll data-scroll-speed='0.2' className='flex justify-center items-center w-[15vw] h-[15vw] rounded-full bg-white'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900 '>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate2}deg)`}}className='line top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] absolute w-full h-10'>
                            <div className='w-7 h-7 rounded-full bg-zinc-100 '>

                                </div>
                            </div>
                        </div>
                    </div>s
            </div>
        </div>
    </div>
  )
}

export default Eyes