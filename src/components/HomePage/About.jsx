import React, { useRef, useState } from "react";
import {AnimatePresence, motion } from "framer-motion";

import { Tilt } from "react-tilt";
import { styles } from "../styles";

import { fadeIn, textVariant } from "../../utils/motion";
import { services } from "../constants";


const ServiceCard = ({ index, title, icon, subtitle, linkedIn, instagram, github }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showHover, setShowHover] = useState(false);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowHover(false);
  };

  return (
    <Tilt
      style={{
        marginRight: isHovered ? "270px" : "0",
        transition: "margin-right 0.5s ease-in-out",
      }}
      options={{ max: 45, scale: 1.02 }}
      className="xs:w-[220px] w-full"
     >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`w-full green-pink-gradient p-[2px] rounded-[20px] shadow-card`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={cardRef}
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img
            src={icon}
            alt="web-development"
            className="w-25 h-25 object-contain rounded-2xl"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        {(isHovered &&
          <motion.div
            className="service-card-hover flex flex-row bg-tertiary rounded-[20px] green-pink-gradient"
            initial={{ x: "-100%", position: "absolute", zIndex: -1 }}
            animate={{
              x: showHover ? "0%" : "-100%",
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            exit={{ x: "-100%", transition: { duration: 0.5, ease: "easeInOut" } }}
          >
            <di className='flex flex-col items-center place-content-around place-items-start w-full h-full p-2'>
              <div className='text-md items-center m-4'>
                  <p>{subtitle}</p>
              </div>
              <di className='flex flex-row place-items-center'>
                <div>
                <a href={instagram}>
                <img className='object-contain h-[60px] w-[60px]' src="src/assets/3d-fluency-instagram-logo.png" alt=""></img>
                </a>
                </div>
                <div>
                <a href={linkedIn}>
                <img className='object-contain h-[60px] w-[60px]' src="src/assets/3d-fluency-linkedin-logo.png" alt=""></img>
                </a>
                </div>
                <div>
                <a href={github}>
                <img className='object-contain h-[60px] w-[60px]' src="src/assets/3d-fluency-github-logo.png" alt=""></img>
                </a>
                </div>
              </di>
            </di>
          </motion.div>
          )}
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [showCards, setShowCards] = useState(false);
  const [ogButton , setButton] = useState('Know more')
  

  const handleExploreClick = () => {
    setShowCards(true);
    if(ogButton === 'Know more'){
      setShowCards(true);
      setButton('Know less');
    }
    else
    {
      setShowCards(false); 
      setButton('Know more')
    }
  };

  return (
    <section className={`relative w-full h-screen mx-auto top-[20pxpx]`}
    id="about"
    style={{
      marginBottom: showCards ? "100px" : "0",
      transition: "margin-bottom 0.5s ease-in-out",
    }} >
      <div className={`flex flex-row item-center gap-5 top-[130px]`}>
        <div className={`absolute inset-0 top-[120px] ${styles.paddingX} max-w-7xl mx-auto `}>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>About <span className='text-[#0D6EFD]'>Us</span></h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]'
          >
            Welcome to our team of forward-thinking engineering students with a shared 
            passion for technology to enhance public safety. Specializing 
            in machine learning and deep learning, our focus extends to the development 
            of effective projects that redefine the landscape of crime detection.
            <br></br>
            From predictive analytics for law enforcement to immersive simulation tools 
            and advanced fingerprint analysis, we are driven by a commitment to fostering 
            safer communities.
          </motion.p>
          <br></br>
          <motion.button
            value={fadeIn("","",0.1,1)}
            className='rounded-full bg-[#0D6EFD] p-2 px-4 mt-5 w-45'
            onClick={handleExploreClick}
          >
            {ogButton}
          </motion.button>
          <AnimatePresence>
            {showCards && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='mt-[30px] flex flex-wrap gap-10 place-content-start p-4 m-3'
              >
                {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service}/>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={`inset-0 top-50 ${styles.paddingX} max-w-7xl mx-auto`}></div>
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <img src="src/assets/aboutus.png" className="h-[400px] max-w-lg  mr-[110px] mt-[90px]" />
        </motion.div>
      </div>
    </section>
  );
};
export default About;