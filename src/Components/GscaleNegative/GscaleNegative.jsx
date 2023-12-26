import React, { useRef } from 'react';
import './GscaleNegative.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
const GscaleNegative = () => {
  const imageInputRef = useRef(null);

  const handleImage = (e) => {
    const originalCanvas = document.getElementById('originalCanvas');
    const originalCtx = originalCanvas.getContext('2d');

    const negativeCanvas = document.getElementById('negativeCanvas');
    const negativeCtx = negativeCanvas.getContext('2d');

    const img = new Image();
    img.onload = function () {
      // Set canvas size to match the image
      originalCanvas.width = img.width;
      originalCanvas.height = img.height;

      negativeCanvas.width = img.width;
      negativeCanvas.height = img.height;

      // Draw the original image
      originalCtx.drawImage(img, 0, 0, img.width, img.height);

      // Draw the original image on the negative canvas
      negativeCtx.drawImage(img, 0, 0, img.width, img.height);

      // Get image data from the negative canvas
      const imageData = negativeCtx.getImageData(0, 0, img.width, img.height);

      // Apply image negative
      applyNegative(imageData);

      // Put the modified image data back to the negative canvas
      negativeCtx.putImageData(imageData, 0, 0);
    };

    // Load the selected image
    img.src = URL.createObjectURL(e.target.files[0]);
  };

  const applyNegative = (imageData) => {
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      // Invert each color channel
      data[i] = 255 - data[i]; // Red
      data[i + 1] = 255 - data[i + 1]; // Green
      data[i + 2] = 255 - data[i + 2]; // Blue
      // Alpha channel (data[i + 3]) is not modified for simplicity
    }
  };

  return (
    <div className='gscale'>
        
        <h1><FaQuoteLeft /> Image Negative <span>Algorithim.. </span><FaQuoteRight /></h1>
        <div className='gscale__input'>

      <input type="file" ref={imageInputRef} accept="image/*" onChange={handleImage} />
        </div>

      <div className="canvas-container">
        <canvas id="originalCanvas" width="500" height="500"></canvas>
        <canvas id="negativeCanvas" width="500" height="500"></canvas>
      </div>
    </div>
  );
};

export default GscaleNegative;
