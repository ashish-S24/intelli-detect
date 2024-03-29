import React, { useLayoutEffect } from 'react';
import AdvisorCard from './Predictor/Card';
import { Footer } from './HomePage';
import Info from './Predictor/Info';
import Navbar from './constants/Navbar';

function Predictor() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <Navbar />
      <div className='relative z-0 bg-primary'>
      <AdvisorCard />
      </div>
      <Info/>
      <Footer />
    </div>
  );
}

export default Predictor;
