import React,{useState} from 'react';
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import finger from "../../assets/finger.png"
import ImageUploader from '../constants/ImageUploader';


const Card = ({}) => {
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
    <Tilt>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-[454px] green-pink-gradient p-1 rounded-[20px] shadow-card`}
    >
      <div className='bg-hero-pattern bg-cover bg-no-repeat p-8 bg-center rounded-[20px]'>
        <ImageUploader onFileUpload={onFileUpload} />
      </div>
    </motion.div>
  </Tilt>
    );
  };
  

function ThroughWrit() {
  
  return (
    <section className={`relative w-full h-[500px] mx-auto`}>
         <div
        className={`absolute inset-0 top-[250px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
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
                <Card />
            </div>
        </div>
      </div>
    </section>
  )
}

export default ThroughWrit;