import React, { useState, useRef } from 'react'
import scale_chart from '../../assets/scale_chart.svg'
import needle from "../../assets/needle.svg"
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf'


const Result = ({ value }) => {
    const needlePosition = value - 2.9;
    const [passowrd, setPassword] = useState('');
    const [authChecked, setAuthChecked] = useState(false);
    const cardRef = useRef(null);

    const handleAuthentication = () => {
        console.log(passowrd);
        if (passowrd == 123456789) {
            setAuthChecked(true);
        }
        else {
            alert("Wrong Password");
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


    return (
        <div className='w-full flex flex-col items-center  h-full'>
            <div className='flex flex-col justify-center items-center '>
                <input onChange={(e) => setPassword(e.target.value)} name='password' className='bg-primary text-2xl pl-4 placeholder:text-[#9B9B9B] w-[426px] h-[76px] border border-[#9B9B9B]' type='password' placeholder='Enter Password'></input>
                <button onClick={handleAuthentication} className='h-[55px] py-2 px-5 mt-20 border border-[#D9D9D9] bg-blue-600 text-black font-semibold text-2xl'>View Result</button>
            </div>
            {authChecked ?
                <div className='h-fit  mt-[200px] bg-primary' ref={cardRef} >
                    <div className="relative" id='result'>
                        <img src={scale_chart} className=' object-cover' />
                        <div className="absolute top-[105px] w-[55px] flex flex-col justify-center items-center gap-2" style={{ left: `${needlePosition}%`, transition: 'left 0.5s ease-in-out' }} >
                            <img src={needle} className=''></img>
                            <span className='text-white text-md'>{value}%</span>
                        </div>
                    </div>
                    <div className='w-full h-[500px] mt-[150px] flex'>
                        <div className='w-1/2 flex flex-col gap-5 mt-16 text-white font-medium text-2xl'>
                            <span className='flex gap-3 '><p className=''>1.</p><p>This table provides information about the severity ranges for different levels of criminal behavior.</p></span>
                            <span className='flex  gap-3'><p>2.</p><p>Each category represents a range of scores on a scale of 0 to 100, with higher scores indicating more severe criminal behavior.</p></span>
                            <span className='flex  gap-3'><p>3.</p><p>Use this table to understand and categorize criminal behavior severity based on the given ranges.</p></span>
                        </div>
                        <div className='w-1/2 flex items-center justify-center'>
                            <table className='border border-blue-600 w-[80%] h-[80%] text-2xl text-white'>
                                <thead>
                                    <tr className='border border-blue-600'>
                                        <th className='border-2 border-blue-600 py-4'>Criminal Behaviour</th>
                                        <th className='border-2 border-blue-600'>Range</th>
                                    </tr>
                                </thead>
                                <tbody className='border-2 border-blue-600'>
                                    <tr className=''>
                                        <td className='text-center border-r-2 border-blue-600'>Very Minimal</td>
                                        <td className='text-center'>0-17</td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center border-r-2 border-blue-600'>Minimal</td>
                                        <td className='text-center'>17-34</td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center border-r-2 border-blue-600'>Moderate</td>
                                        <td className='text-center'>34-50</td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center border-r-2 border-blue-600'>Severe</td>
                                        <td className='text-center'>50-67</td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center border-r-2 border-blue-600'>Very Severe</td>
                                        <td className='text-center border-r-2 border-blue-600'>67-83</td>
                                    </tr>
                                    <tr className=''>
                                        <td className='text-center border-r-2 border-blue-600'>Worst</td>
                                        <td className='text-center'>83-100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                : <div></div>
            }
            <div>
                <button onClick={downloadPDF} className='w-[155px] h-[55px] mt-20 border border-[#D9D9D9] bg-blue-600 text-black font-semibold text-2xl'>Download</button>
            </div>
        </div>
    )
}

export default Result