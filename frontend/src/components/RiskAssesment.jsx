import React, { useState } from 'react'
import CriminalBehaviorAssessment from './RiskAssesment/CriminalBehaviorAssessment';
import { styles } from './styles';
import { Footer } from './HomePage';
import UserForm from './RiskAssesment/UserForm';
import { PrimeReactProvider } from 'primereact/api';
import Result from './RiskAssesment/Result';
import { ScrollTop } from 'primereact/scrolltop';

const RiskAssesment = () => {
    const [isInputSet, setIsInputSet] = useState(false);
    const [askForAuth, setAskForAuth] = useState(false);
    const [childData, setChildData] = useState();

    const onSubmit = (data) => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
        setAskForAuth(true);
    }

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
                                                    <p className='flex gap-4'><p className='text-[#0D6EFD]'>Name:</p> {childData.name}</p>
                                                    <span className='flex gap-10'>
                                                        <p className='flex gap-4'><p className='text-[#0D6EFD]'>Age:</p> {childData.age}</p>
                                                        <p className='flex gap-4'><p className='text-[#0D6EFD]'>Gender:</p> {childData.gender}</p>
                                                    </span>
                                                    <p className='flex gap-4'><p className='text-[#0D6EFD]'>Mobile No:</p> {childData.mobile}</p>
                                                    <p className='flex gap-4'><p className='text-[#0D6EFD]'>Email Address:</p> {childData.email}</p>
                                                </div>
                                            )
                                            :
                                            <p className=' text-2xl font-semibold'>
                                                To provide the necessary data for the crime risk assessment,
                                                please input the following information. Your privacy and
                                                confidentiality are our top priorities.
                                                To begin the crime risk assessment, please click on the "Start
                                                Test" button below after entering your information.
                                            </p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='mt-20 w-full h-fit'>
                            {askForAuth ?
                                <div className='relative h-[1200px]'>
                                    <Result value={50} />
                                </div>
                                :
                                <div>
                                    {
                                        isInputSet ? <CriminalBehaviorAssessment onSubmit={onSubmit} />
                                            : <UserForm sendDataToParent={receiveDataFromChild} />
                                    }
                                </div>
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