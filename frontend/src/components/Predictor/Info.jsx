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
            <motion.h2 className={styles.sectionHeadText} variants={fadeIn("", "", 0.1, 1)}>Instructions</motion.h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[19px] max-w-3xl leading-[30px]'
          >
            <p className="m-3">1) Select either fingerprint detection or crime risk assessment
              analysis.</p>
            <p className="m-3">2) For fingerprint detection, upload fingerprints of crime
              suspects</p>
            <p className="m-3">3)  Provide clear and high-quality fingerprints.</p>
            <p className="m-3">4) Upload evidence related to the crime scene..</p>
            <p className="m-3">5) The system will compare the evidence with uploaded
              fingerprints to identify potential suspects.</p>
            <p className="m-3">6) Alternatively, for crime risk assessment analysis, answer
              crime scenario-related questions.</p>
            <p className="m-3">7) Provide honest and accurate responses to assess the risk
              of criminal behavior.</p>
            <p className="m-3">8) After analysis, view results indicating potential suspects or
              risk assessment.</p>
            <p className="m-3">9) Look for a download option to save the results for future
              reference.</p>
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