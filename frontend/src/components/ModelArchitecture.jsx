import React from 'react';
import { styles } from './styles';
import architect from "../assets/architect.png";
import { Footer } from './HomePage';
import Navbar from './constants/Navbar';

const ModelArchitecture = () => {
    return (
        <div className='bg-primary h-full'>
            <Navbar/>
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
                                    The model architecture employs a Convolutional Neural
                                    Network (CNN) for fingerprint detection, leveraging its ability
                                    to learn spatial hierarchies of features from input images. The
                                    Adam optimizer is used for parameter adjustment, aiming to
                                    minimize the loss function during training. ReLU activation
                                    functions within convolutional layers enhance the model's
                                    capacity to learn complex patterns, while softmax activation
                                    at the output layer produces interpretable class probabilities.
                                    This approach ensures accurate fingerprint detection for
                                    biometric authentication and forensic analysis.
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