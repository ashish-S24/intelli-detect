import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import { styles } from "../styles";





const Hero = () => {
  return (
    
    <section className={`relative w-full h-screen mx-auto`}>
      <Spline scene="https://prod.spline.design/LBYRUEe88CwAHKtj/scene.splinecode" />
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#0D6EFD]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Crime <span className='text-[#0D6EFD]'> Detection - AI </span>
          </h1>
          <div className='mt-10'>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Bedfordshire Police use AI to save hours on admin duties <br className='sm:block hidden' /></p>
            <p className={`${styles.sectionSubText} m-3`}>
The Policing Minister has urged forces to follow Bedfordshire in using artificial intelligence (AI) to carry out admin tasks.</p>
            <Link to={'https://www-bbc-com.cdn.ampproject.org/v/s/www.bbc.com/news/uk-england-cambridgeshire-67680698.amp?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17054251200946&csi=1&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fuk-england-cambridgeshire-67680698'}><button className='rounded-full bg-[#0D6EFD] p-2 px-4 m-2 ' >Know more</button></Link>
        </div>
        <div className='mt-10'>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Jaipur Police Harness AI Facial Recognition To Enhance Security <br className='sm:block hidden' /></p>
            <p className={`${styles.sectionSubText} m-3`}>Jaipur: The city police have adopted Artificial Intelligence (AI) technology to monitor potential miscreants moving within the city using the Facial Recognition System (FRC).</p>
            <Link to={'https://timesofindia-indiatimes-com.cdn.ampproject.org/v/s/timesofindia.indiatimes.com/city/jaipur/jaipur-police-harness-ai-facial-recognition-to-enhance-security/amp_articleshow/103564720.cms?amp_gsa=1&amp_js_v=a9&usqp=mq331AQIUAKwASCAAgM%3D#amp_tf=From%20%251%24s&aoh=17054251200946&csi=1&referrer=https%3A%2F%2Fwww.google.com&ampshare=https%3A%2F%2Ftimesofindia.indiatimes.com%2Fcity%2Fjaipur%2Fjaipur-police-harness-ai-facial-recognition-to-enhance-security%2Farticleshow%2F103564720.cms'}><button className='rounded-full bg-[#0D6EFD] p-2 px-4 m-2 ' >Know more</button></Link>
        </div>
        
        </div>
      </div>
    
     {/* <Computers/> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;