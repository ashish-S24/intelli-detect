import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";

import { fadeIn, textVariant } from "../../utils/motion";
import { useNavigate } from 'react-router-dom';



const IntelliDetect = () => {
  
  const navigate = useNavigate();

  const navigateHandle = () => {
        navigate('/predictor');
  }

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`flex flex-row item-center gap-5`}
      >
        <div className={`absolute inset-0 top-[120px] ${styles.paddingX} max-w-7xl mx-auto`}>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}><span className='text-[#0D6EFD]'>Intelli Detect</span></h2>
            <p className={styles.heroSubText} >Real Time Detection</p>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]'
          >
            
            Beyond traditional methods, our AI-driven Crime Detection Simulation Tool 
            contributes to predictive policing by identifying patterns and trends by 
            analyzing fingerprints, helping law enforcement anticipate and prevent 
            criminal activities.
            <br></br>
            It also stimulate AI-driven Crime Risk Assessment module  
            that evaluates patterns and criminal behaviour of crime suspects. 
          </motion.p>
          <br></br>
            <motion.button variants={fadeIn("", "", 0.1, 1)}
              className='rounded-full bg-[#0D6EFD] p-2 px-4 mt-5 w-45'
              onClick={navigateHandle}>
              Explore more
            </motion.button>
        </div>
        <div className={`inset-0 top-[120px] ${styles.paddingX} max-w-7xl mx-auto`}></div>
        <motion.div
            variants={fadeIn("", "", 0.1, 1)}
        >
            <img src="src/assets/twodoc.png" className="h-[450px] max-w-lg ml-10 mt-28" />

        </motion.div>
      </div>
    </section>
  );
};

export default IntelliDetect;