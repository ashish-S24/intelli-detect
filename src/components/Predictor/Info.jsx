import React from "react";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { useNavigate } from 'react-router-dom';
import { info } from "autoprefixer";



const Info = () => {
  
  return (
    <section className={`relative w-full h-[800px] top-[150px] mb-[150px]`}>
      <div
        className={`flex flex-row item-center gap-5`}
      >
        <div className={`absolute inset-0 ${styles.paddingX} max-w-7xl mx-auto`}>
          <motion.div variants={textVariant()}>
            <motion.h2 className={styles.sectionHeadText} variants={fadeIn("","",0.1,1)}>Instructions</motion.h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[19px] max-w-3xl leading-[30px]'
          >
          <p className="m-3">1) Choose the disease that you would like to be diagnosed with Parkinson's or Alzheimer's disease.</p>
          <p className="m-3">2) Next, select the diagnostic method that you would like to use. You can either choose MRI or handwriting analysis.</p>
          <p className="m-3">3) If you choose MRI, you will need to upload a high-quality image of your brain scan. Make sure that you have a valid and recent MRI image of your brain.</p>
          <p className="m-3">4) If you choose handwriting analysis, you will need to upload a sample of spiral/wave handwriting. Make sure that you use a good quality pen or pencil and write on a blank piece of paper.</p>
          <p className="m-3">5) After you have uploaded the image or handwriting sample, the BrainCheck diagnostic algorithm will analyze it to determine whether you have Parkinson's or Alzheimer's disease.</p>
          <p className="m-3">6) Once the analysis is complete, you will be able to view the result on the website. The result will tell you whether you have the disease or not.</p>
          <p className="m-3">7) If you want to download the result, look for a download option on the website. Download and save the result on your device for future reference.</p>
          </motion.p>
        </div>
        <div className={`inset-0 top-[120px] ${styles.paddingX} max-w-7xl mx-auto`}></div>
        <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className='mr-10'
        >
            <img src="src/assets/3d-fluency-reading.png" className="w-[400px] mr-[60px] mt-[120px]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Info;