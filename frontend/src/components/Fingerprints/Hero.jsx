import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-[130px] mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX - 1 } flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Fingerprint <span className='text-[#915EFF]'>Detection</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;