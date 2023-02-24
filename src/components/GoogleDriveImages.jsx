import React, { useState, useEffect } from 'react';

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

  return (
    <div>
      <div className="image-grid">
        {images.map((image) => (
          <img key={image.id} src={image.thumbnailLink} alt={image.name} />
        ))}
      </div>
    </div>
  );
};

export default GoogleDriveImages;
