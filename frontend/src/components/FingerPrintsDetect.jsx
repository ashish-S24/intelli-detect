import React, { useLayoutEffect } from 'react';
import ThroughMRI from './Fingerprints/Fingerprints';
import { Footer} from './HomePage';
import ThroughWrit from './Fingerprints/Evidence';
import Hero from './Fingerprints/Hero';
import { useNavigate } from 'react-router-dom';



function FingerPrintsDetect() {
  const navigate = useNavigate();

  const handleNavigate = () => {
      navigate("/result");
  }
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
      <div className='w-full flex justify-center items-center mt-[150px]'>
        <button onClick={handleNavigate} className="relative rounded-full bg-[#0D6EFD] py-3 px-5 mt-5 cursor-pointer">View Result</button>
      </div>
      <div className='relative z-0 mt-[180px]'>
      <Footer/>
      </div>
    </div>
  );
}

export default FingerPrintsDetect;
