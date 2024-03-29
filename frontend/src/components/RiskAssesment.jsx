import React, { useState, useRef } from 'react'
import CriminalBehaviorAssessment from './RiskAssesment/CriminalBehaviorAssessment';
import { styles } from './styles';
import { Footer } from './HomePage';
import UserForm from './RiskAssesment/UserForm';
import { PrimeReactProvider } from 'primereact/api';
import Result from './RiskAssesment/Result';
import { ScrollTop } from 'primereact/scrolltop';
import Navbar from './constants/Navbar';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf'

const RiskAssesment = () => {
    const [isInputSet, setIsInputSet] = useState(false);
    const [askForAuth, setAskForAuth] = useState(false);
    const [resultValue, setResultValue] = useState();
    const [childData, setChildData] = useState();
    const cardRef = useRef();

    const onSubmit = (data) => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
        setAskForAuth(true);
        let disagree = 0;
        let agree = 0;

        for(let key in data){
            if(data[key] < 2){
                disagree++;
            }
            else if(data[key] > 2){
                agree++;
            }
        }
    function precentGenrater (min , max) {
        const randomNumber = Math.random();
        const scaledNumber = (randomNumber * (max - min)) + min;
        const roundedNumber = scaledNumber.toFixed(2);
        return roundedNumber;
    }
        if(agree == 13 && disagree == 7){
            setResultValue(precentGenrater(0, 12));
        }
        else if(agree == 0 && disagree == 0){
            setResultValue(precentGenrater(0, 0));
        }
        else if(disagree > 15){
            setResultValue(precentGenrater(83, 100));
        }
        else if(agree > 15){
            setResultValue(precentGenrater(45, 60));
        }
        else if(agree == disagree ){
            setResultValue(precentGenrater(35, 55));
        }
        else if(agree > disagree){
            setResultValue(precentGenrater(17, 30));
        }
        else if(disagree > agree){
            setResultValue(precentGenrater(55, 83));
        }
        
    }

    const downloadPDF = () => {
        html2canvas(cardRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imageWidth = canvas.width;
            const imageHeight = canvas.height;
            const margin = 10; // add some margin
            const ratio = Math.min((pageWidth - margin * 2) / imageWidth, (pageHeight - margin * 2) / imageHeight);
            const imageX = (pageWidth - imageWidth * ratio) / 2;
            const imageY = (pageHeight - imageHeight * ratio) / 2;

            pdf.setFillColor(6, 8, 22);
            pdf.rect(0, 0, pageWidth, pageHeight, "F");

            pdf.addImage(imgData, "PNG", imageX, imageY, imageWidth * ratio, imageHeight * ratio);
            pdf.save("download.pdf");
        });
    };



    const receiveDataFromChild = (data) => {
        setChildData(data);
        setIsInputSet(true);
    };
    return (
        <PrimeReactProvider >
            <div className='bg-primary h-fit'>
                <Navbar />
                <section className={`relative w-full h-fit mx-auto bg-primary `} ref={cardRef}>
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
                                                <div className='flex flex-col gap-3 font-semibold text-2xl text-white'>
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
                                    <Result value={resultValue} downloadPDF={downloadPDF}/>
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