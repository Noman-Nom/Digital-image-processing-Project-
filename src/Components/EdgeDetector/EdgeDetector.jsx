import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './EdgeDetector.scss'

const EdgeDetector = () => {
  const handleImage = (e) => {
    const inputCanvas = document.getElementById('inputCanvas');
    const inputCtx = inputCanvas.getContext('2d');

    const outputCanvas = document.getElementById('outputCanvas');
    const outputCtx = outputCanvas.getContext('2d');

    const img = new Image();
    img.onload = function () {
      // Set canvas size to match the image
      inputCanvas.width = img.width;
      inputCanvas.height = img.height;

      outputCanvas.width = img.width;
      outputCanvas.height = img.height;

      // Draw the original image
      inputCtx.drawImage(img, 0, 0, img.width, img.height);

      // Get image data
      const imageData = inputCtx.getImageData(0, 0, img.width, img.height);

      // Apply Sobel edge detection
      const resultImageData = applySobel(imageData);

      // Put the modified image data back to the output canvas
      outputCtx.putImageData(resultImageData, 0, 0);
    };

    // Load the selected image
    img.src = URL.createObjectURL(e.target.files[0]);
  };

  const applySobel = (imageData) => {
    const data = imageData.data;
    const width = imageData.width;
    const height = imageData.height;

    const resultData = new Uint8ClampedArray(data.length);

    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        // Apply Sobel operator
        const gx =
          data[((y - 1) * width + x - 1) * 4] +
          2 * data[(y * width + x - 1) * 4] +
          data[((y + 1) * width + x - 1) * 4] -
          data[((y - 1) * width + x + 1) * 4] -
          2 * data[(y * width + x + 1) * 4] -
          data[((y + 1) * width + x + 1) * 4];

        const gy =
          data[((y - 1) * width + x - 1) * 4] +
          2 * data[((y - 1) * width + x) * 4] +
          data[((y - 1) * width + x + 1) * 4] -
          data[((y + 1) * width + x - 1) * 4] -
          2 * data[((y + 1) * width + x) * 4] -
          data[((y + 1) * width + x + 1) * 4];

        const gradient = Math.sqrt(gx * gx + gy * gy);

        // Set grayscale value to the result data
        resultData[(y * width + x) * 4] = gradient;
        resultData[(y * width + x) * 4 + 1] = gradient;
        resultData[(y * width + x) * 4 + 2] = gradient;
        resultData[(y * width + x) * 4 + 3] = 255; // Alpha channel
      }
    }

    return new ImageData(resultData, width, height);
  };

  return (
  
  <div className='edge'>
      <h1><FaQuoteLeft /> Grayscale To Color Scale <span>Algorithim.. </span><FaQuoteRight /></h1>
      <div className='edge__input'>

        <input type="file" id="imageInput" accept="image/*" onChange={handleImage} />
      </div>


      <div className="edge-container">
        <div className='canvas__item'>
         
        <canvas id="inputCanvas" width="500" height="500"></canvas>
        </div>

        <div className='canvas__item'>
          
        <canvas id="outputCanvas" width="500" height="500"></canvas>
        </div>
      </div>

    </div>
  );
};

export default EdgeDetector ;


