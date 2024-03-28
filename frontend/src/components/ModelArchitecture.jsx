import React from 'react';
import { styles } from './styles';
import architect from "../assets/architect.png";
import { Footer } from './HomePage';

const ModelArchitecture = () => {
    return (
        <div className='bg-primary h-full'>
            <section className={`relative w-full h-screen mx-auto bg-primary `}>
                <div
                    className={`relative inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX - 1} flex flex-col items-start gap-5`}
                >
                    <div className='flex gap-8'>
                        <div className='flex flex-col justify-center items-center mt-5'>
                            <div className='w-5 h-5 rounded-full bg-[#0D6EFD]' />
                            <div className='w-1 sm:h-80 h-40 violet-gradient' />
                        </div>

                        <div>
                            <h1 className={`${styles.heroHeadText} text-white`}>
                                Model <span className='text-[#0D6EFD]'>Architecture</span>
                            </h1>
                            <div className='mt-10'>
                                <p className=' text-2xl font-semibold'>
                                    Choosing the right college is crucial for a successful future. Don't leave it to chance - trust our college rank predictor to guide you. Our sophisticated algorithm considers academic performance, admission criteria, and college ranking to predict your chances of getting into your dream college. Make informed decisions with our accurate and reliable college ranking predictor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <img src={architect} />
                    </div>
                </div>
            </section>
            <div className='relative top-[280px] bg-primary'>
                <Footer />
            </div>
        </div>
    )
}

export default ModelArchitecture