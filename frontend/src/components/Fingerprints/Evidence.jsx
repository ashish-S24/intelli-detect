import React,{useState} from 'react';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import finger from "../../assets/finger.png"
import ImageUploader from '../constants/ImageUploader';


const ServiceCardThroughWrit = ({}) => {

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
                onChange={''}
                multiple
              />
            </div>
          </label>
        </div>
      </motion.div>
      <div>
          <p>{''}</p>
      </div>
      </Tilt>
    );
  };
  

function ThroughWrit() {
  
  const onFileUpload = async (file) => {
    try {
      // Create a FormData object
      const formData = new FormData();
      formData.append('image', file);

      // Make a POST request to your server endpoint to save the image
      const response = await fetch('http://localhost:3001/api/uploadtest', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully!');
      } else {
        console.error('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
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
                <ImageUploader onFileUpload={onFileUpload}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ThroughWrit;