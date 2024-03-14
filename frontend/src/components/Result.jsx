import React, {useLayoutEffect, useRef, useEffect} from "react";
import { Footer } from "./HomePage";
import { useLocation } from "react-router-dom";
import html2canvas from 'html2canvas';





function Result() {
  const location = useLocation();
  const imageUrl = location.search.split('=')[1];
  const cardRef = useRef(null);


  const handleData = async () => {
    const response = await fetch('http://localhost:3001/api/result');
    const data = await response.json();
    console.log(data);
  }
  
  useEffect(() => {
    handleData();
  }, []);


  // const downloadPDF = () => {
  //   getImageData(decodeURIComponent(imageUrl), cardRef);

  //   html2canvas(cardRef.current).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4");
  //     const pageWidth = pdf.internal.pageSize.getWidth();
  //     const pageHeight = pdf.internal.pageSize.getHeight();
  //     const imageWidth = canvas.width;
  //     const imageHeight = canvas.height;
  //     const margin = 10; // add some margin
  //     const ratio = Math.min((pageWidth - margin * 2) / imageWidth, (pageHeight - margin * 2) / imageHeight);
  //     const imageX = (pageWidth - imageWidth * ratio) / 2;
  //     const imageY = (pageHeight - imageHeight * ratio) / 2;

  //     pdf.setFillColor(6, 8, 22);
  //     pdf.rect(0, 0, pageWidth, pageHeight, "F");

  //     pdf.addImage(imgData, "PNG", imageX, imageY, imageWidth * ratio, imageHeight * ratio);
  //     pdf.save("download.pdf");
  //   });
  // };
  

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="bg-primary">
    <section  className={`w-full  mx-auto bg-primary mb-[180px]`}>
      <div id="card" className='flex w-full place-content-around'>
        <div>
          <div ref={cardRef} className={`w-[804px] green-pink-gradient p-[2px] rounded-[20px] shadow-card mt-[100px]`}>
              <div
                   options={{
                   max: 45,
                   scale: 1,
                   speed: 450,
                    }}
                   className="bg-primary rounded-[20px] p-3  w-[800px] flex items-center flex-col"
                    >
                    <div className='w-full mt-[20px] flex flex-row p-3'>
                      <div className="h-[250px]">
                      <div className="mb-[190px] green-pink-gradient p-[2px] rounded-[20px] shadow-card">
                        <div className=" bg-primary rounded-[20px] flex items-center">
                              <img
                                  src= {''}
                                  alt="web-development"
                                  className="w-[390px] h-[250px] object-contain rounded-2xl"
                                />
                          </div>
                       </div>
                      </div>
                    <div className="w-full ml-4 p-4">
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                     Image Size : 500 KB
                    </p>
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                      Image Quality : Good
                    </p>
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                      Disease Level : 2
                    </p>
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                      Class : Mild Demented
                    </p>
                    </div>
                    </div>
                    <div className="border w-[750px] border-gray-500 mt-[40px]"></div>
                    <div className="mt-[40px] mb-7">
                    <p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                    The patient's handwriting prediction shows mild dementia, it suggests that the individual is experiencing some cognitive decline, including difficulties with memory, language, and problem-solving. Here are some general guidelines for providing care:
                    </p><p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                   Supportive environment: Provide a safe and supportive environment that minimizes stress and confusion. This may involve minimizing background noise, using visual aids such as calendars and labels, and maintaining a consistent routine.
                    </p><p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                   Assistance with daily activities: The patient may require assistance with daily activities such as bathing, dressing, grooming, and toileting. It is important to maintain the individual's dignity and privacy while providing assistance.
                    </p><p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                  Communication: Communication may become increasingly difficult for the patient, so it is important to use clear and simple language, speak slowly, and provide adequate time for the patient to respond. Nonverbal cues such as facial expressions and gestures can also be helpful.
                    </p><p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                  Nutrition: A balanced diet and adequate hydration are essential for maintaining overall health. If necessary, work with a nutritionist or dietician to develop a meal plan that meets the individual's needs and preferences.
                    </p><p className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px] ml-[30px] mr-[30px]'>
                  It's also important to understand that dementia is a progressive disorder, and while there is no cure, early diagnosis, and intervention can help slow the progression of symptoms and improve quality of life. Additionally, lifestyle factors such as exercise, a healthy diet, and social engagement can help reduce the risk of dementia and support brain health. Regular check-ups with a healthcare provider can also help monitor and manage the patient's condition.
                      </p>
                    </div>
               </div>
           </div>
          <div className="flex place-content-center mt-[50px]">
           <button className='rounded-full bg-[#915EFF] p-2 text-[20px]' onClick={''}> Download </button>
          </div>
        </div>
        </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Result;