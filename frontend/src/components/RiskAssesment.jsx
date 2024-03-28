import React, { useState } from 'react'
import CriminalBehaviorAssessment from './RiskAssesment/CriminalBehaviorAssessment';
import { styles } from './styles';
import { Footer } from './HomePage';
import UserForm from './RiskAssesment/UserForm';
import { PrimeReactProvider } from 'primereact/api';

const RiskAssesment = () => {
    const [isInputSet, setIsInputSet] = useState(false);

    const [childData, setChildData] = useState();

    const receiveDataFromChild = (data) => {
        setChildData(data);
        setIsInputSet(true);
    };
    return (
        <PrimeReactProvider >
            <div className='bg-primary h-fit'>
                <section className={`relative w-full h-fit mx-auto bg-primary `}>
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
                                    Crime <span className='text-[#0D6EFD]'>Risk Assesment</span>
                                </h1>
                                <div className='mt-10'>
                                    {
                                        isInputSet ?
                                            (
                                                <div className='flex flex-col gap-3 font-semibold text-2xl'>
                                                    <p>Name: {childData.name}</p>
                                                    <span className='flex gap-10'>
                                                        <p>Age: {childData.age}</p>
                                                        <p>Gender: {childData.gender}</p>
                                                    </span>
                                                    <p>Mobile Number : {childData.mobile}</p>
                                                    <p>Email Address: {childData.email}</p>
                                                </div>
                                            )
                                            :
                                            <p className=' text-2xl font-semibold'>
                                                Choosing the right college is crucial for a successful future. Don't leave it to chance - trust our college rank predictor to guide you. Our sophisticated algorithm considers academic performance, admission criteria, and college ranking to predict your chances of getting into your dream college. Make informed decisions with our accurate and reliable college ranking predictor.
                                            </p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='mt-20 w-full'>
                            {
                                isInputSet ? <CriminalBehaviorAssessment />
                                    : <UserForm sendDataToParent={receiveDataFromChild}/>
                            }
                        </div>
                    </div>
                </section>
                <div className='relative top-[280px] bg-primary'>
                    <Footer />
                </div>
            </div>
        </PrimeReactProvider>
    )
}

export default RiskAssesment