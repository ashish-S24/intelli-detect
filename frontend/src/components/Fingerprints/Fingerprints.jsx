import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import { useNavigate } from 'react-router-dom';
import { styles } from "../styles";
import fingers from "../../assets/fingers.png"
import ImageUploader from "../constants/ImageUploader";


const Card = ({ }) => {

  const onFileUpload = async (file) => {
    try {
      // Create a FormData object
      const formData = new FormData();
      formData.append('image', file);

      // Make a POST request to your server endpoint to save the image
      const response = await fetch('http://localhost:3001/api/uploadtrain', {
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

const ThroughMRI = () => {
  return (
    <section className={`relative w-full h-[400px] mx-auto mb-[80px] mt-7`}>
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <div className='flex flex-row '>
            <div>
              <h3 className={`${styles.heroSubText} text-md`}>Upload crime suspects fingerprints:</h3>
              <p className={`${styles.sectionSubText} m-3 mt-7 text-lg`}> To upload crime suspects' fingerprints, make sure you have
            clear, high-quality images of the suspects' fingerprints.
            Access the designated upload platform, select the files,
            initiate the upload process, and monitor its progress.
            fingerprint detection.</p>
            </div>
            <div className="p-4 mb-10 ml-5 mt-0">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThroughMRI;