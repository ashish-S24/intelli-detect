import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onFileUpload }) => {
  const [images, setImages] = useState([]);

  const onDrop = async (acceptedFiles) => {
    // Process uploaded files
    const uploadedImages = [];
    for (const file of acceptedFiles) {
      const imageUrl = URL.createObjectURL(file);
      uploadedImages.push(imageUrl);
      // Notify parent component about the uploaded file
      onFileUpload(file);
    }
    // Update state with uploaded image URLs
    setImages((prevImages) => [...prevImages, ...uploadedImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <div>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop some files here, or click to select files</p>
      </div>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
