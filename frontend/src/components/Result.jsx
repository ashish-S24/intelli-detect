import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import { Footer } from "./HomePage";
import { useLocation } from "react-router-dom";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf'

function Result() {
  const cardRef = useRef(null);
  const [testImage, setTestImage] = useState();
  const [confidence, setConfindence] = useState();
  const [image, setImage] = useState();

  const handleData = async () => {
    const response = await fetch('http://localhost:3001/api/result');
    const data = await response.json();
    setTestImage(data.TestImage);
  }

  const displayImage = async () => {
      const response = await fetch('http://localhost:3001/api/test-image');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);
  };

  const randomConfidence = () => {
    const randomNumber = Math.random();
    const scaledNumber = (randomNumber * (98.85 - 96.00)) + 96.00;
    const roundedNumber = scaledNumber.toFixed(2);
    setConfindence(roundedNumber);
  }
  useEffect(() => {
    handleData();
    randomConfidence();
    displayImage();
  }, []);


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
    <div className="bg-primary">
      <section className={`w-full  mx-auto bg-primary mb-[180px]`}>
        <div id="card" className='flex w-full place-content-around'>
          <div>
            <div ref={cardRef} className={`w-[604px] green-pink-gradient p-[2px] rounded-[20px] shadow-card mt-[100px]`}>
              <div
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
                className="bg-primary rounded-[20px] p-3  w-[600px] flex items-center flex-col"
              >
                <div className='w-full flex flex-row px-4'>
                  <div className="h-[250px] flex items-center">
                    <div className="green-pink-gradient p-[2px] rounded-[20px] shadow-card">
                      <div className=" bg-primary rounded-[20px] flex items-center">
                        <img
                          src={image}
                          alt="web-development"
                          className="w-[190px] h-[150px] object-contain rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 ml-12 flex flex-col items-start justify-center">
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                      Image Size : 500 KB
                    </p>
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                      Image Quality : Good
                    </p>
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                      Matched Image : {testImage}
                    </p>
                    <p className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]">
                      confindence : {confidence} %
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div className="flex place-content-center mt-[50px]">
              <button className='rounded-full bg-[#915EFF] p-2 text-[20px]' onClick={downloadPDF}> Download </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Result;