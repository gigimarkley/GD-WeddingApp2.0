import React, { useState, useEffect } from 'react';
import { photoSampleSetContainer, photoContainer } from '../styling';


const GoogleDriveImages = ({ folderId }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&fields=files(id%2Cname%2CthumbnailLink)&key=AIzaSyD9CoBX6pW7ZJRXdLxiG7YjD99xstP_e-Q`);
        const data = await response.json();
        setImages(data.files);
      } catch (error) {
        console.error(error);
      }
    };
    loadImages();
  }, [folderId]);

const showImages = [
  "1POp3VSz9nyA5noeJdu9YdUCjVBpwE4Zp",//Markley-Kerr
  "1Q378bMuEWoMibYzw69jcUSEITscXh2AD" //Wedding day
]
  return (
    <div>
      <div className="hstack" style={photoSampleSetContainer}>
        {images.map((image) => (
          (showImages.includes(image.id)) && <img key={image.id} src={image.thumbnailLink} alt={image.name} style={photoContainer}  />
        ))}
      </div>
    </div>
  );
};

export default GoogleDriveImages;
