import React, { useLayoutEffect } from 'react';
import AdvisorCard from './Predictor/Card';
import { Footer } from './HomePage';
import Info from './Predictor/Info';

function Predictor() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='relative z-0 bg-primary'>
      <AdvisorCard />
      </div>
      <Info/>
      <Footer />
    </div>
  );
}

export default Predictor;
