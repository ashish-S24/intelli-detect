import React from 'react'
import { About, IntelliDetect , Hero , Footer } from './HomePage';
import Navbar from './constants/Navbar';

function Home() {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero/> 
      </div>
      <div className="bg-cover bg-no-repeat bg-center">
      <IntelliDetect/>
      </div>
      <div className='relative z-0'>
      <About />
      </div>
      <Footer/>
    </div>
  )
}

export default Home;