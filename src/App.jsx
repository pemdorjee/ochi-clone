import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marqee from './components/Marqee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'


const App = () => {
  const locomotive = new LocomotiveScroll();
  return (
    <div className='w-full h-screen '>
      <Navbar />
      <Landing />
      <Marqee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
      <div className=' h-screen w-full bg-blue-500'></div>
    </div>
  )
}

export default App