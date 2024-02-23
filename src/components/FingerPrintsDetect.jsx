import React, { useLayoutEffect } from 'react';
import ThroughMRI from './Fingerprints/Fingerprints';
import { Footer} from './HomePage';
import ThroughWrit from './Fingerprints/Evidence';
import Hero from './Fingerprints/Hero';




function FingerPrintsDetect() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='relative z-0 bg-primary'>
      <div>
        <Hero/> 
      </div>
      <ThroughMRI/>
      <ThroughWrit/>
      <div className='relative z-0 mt-[280px]'>
      <Footer/>
      </div>
    </div>
  );
}

export default FingerPrintsDetect;
