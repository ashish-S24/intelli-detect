import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-[130px] mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX - 1} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#0D6EFD]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Fingerprint <span className='text-[#0D6EFD]'>Detection</span>
          </h1>
          <p className='mt-10 text-2xl font-semibold'>                            
            To upload crime suspects' fingerprints, make sure you have
            clear, high-quality images of the suspects' fingerprints.
            Access the designated upload platform, select the files,
            initiate the upload process, and monitor its progress.
            fingerprint detection
            Select the evidence files, initiate the upload process, and
            monitor its progress. Once uploaded, the evidence will be
            analyzed and compared with the suspect fingerprints to
            identify potential matches or suspects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;