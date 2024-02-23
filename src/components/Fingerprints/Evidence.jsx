import React,{useState} from 'react';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useNavigate } from 'react-router-dom';
import finger from "../../assets/finger.png"


const ServiceCardThroughWrit = ({}) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    const imageUrl = encodeURIComponent(URL.createObjectURL(uploadedImage));
    navigate(`/handwritingresult?image=${imageUrl}`);
  };
  
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
  
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/api/upload");
      xhr.upload.onprogress = (event) => {
        const progress = event.loaded / event.total;
        setUploadProgress(progress);
      };
      xhr.onload = () => {
        setUploadComplete(true);
        setUploadedImage(file);
  
        // Send the uploaded image to the ML model API/predict
        const apiUrl = "http://localhost:3000/api/predict";
        const imageData = new FormData();
        imageData.append("file", file);
  
        const xhr2 = new XMLHttpRequest();
        xhr2.open("POST", apiUrl);
        xhr2.onload = () => {
          const response = JSON.parse(xhr2.responseText);
          console.log(response);
        };
        xhr2.send(imageData);
      };
      xhr.send(formData);
    }
  };
  

  return (
      <Tilt>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-[454px] green-pink-gradient p-[2px] rounded-[20px] shadow-card`}
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 h-[540px] flex justify-evenly items-center flex-col "
          >
          <h3 className="text-white text-[40px] font-bold text-center">
           Evidence
          </h3>
          <img
            src={finger}
            alt="web-development"
            className="w-21 h-23 object-contain rounded-2xl p-4"
          />
          <label htmlFor="upload-input2">
            <div className="relative rounded-full bg-[#915EFF] p-3 mt-5 cursor-pointer">
              Upload Image
              <input
                id="upload-input2"
                type="file"
                accept=".jpg,.jpeg,.png"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={handleUpload}
              />
            </div>
          </label>
        </div>
      </motion.div>
      {uploadProgress > 0 && (
            <div className="mt-3">
              Uploading: {Math.round(uploadProgress * 100)}%
              <motion.div
                className="h-1 bg-gray-300 rounded-full mt-2"
                initial={{ width: 0 }}
                animate={{ width: `${uploadProgress * 100}%` }}
              >
                <motion.div
                  className="h-full bg-[#915EFF] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </motion.div>
            </div>
        )}
         {uploadComplete && (
         <button onClick={handleNavigate} className="relative rounded-full bg-[#915EFF] p-3 mt-5 cursor-pointer"> View Result</button>
         )}
      </Tilt>
    );
  };
  

function ThroughWrit() {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
         <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-row-reverse '>
            <div>
                 <p className={`${styles.heroSubText} text-md`}>
                  <span className='sm:block hidden'>Upload evidence:</span>
                </p>
                 <p className={`${styles.sectionSubText} m-3 mt-7`}>Spiral/wave handwriting analysis is a promising tool 
                 for predicting Parkinson's disease. Studies have found that changes in handwriting movements can indicate the presence of 
                 Parkinson's disease, and analyzing spiral handwriting movements can detect changes in speed, pressure, and size. 
                 While further research is needed to fully understand its potential, 
                 spiral handwriting analysis can be a valuable addition to the diagnostic process.</p>
            </div>
            <div className="p-4 mb-10 mr-5">
                <ServiceCardThroughWrit/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ThroughWrit;