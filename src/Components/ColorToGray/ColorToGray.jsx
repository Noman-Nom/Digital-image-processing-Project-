import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './ColorToGray.scss'
const ColorToGray = () => {
    const handleImage = (e) => {
        const file = e.target.files[0];
    
        // Display the input image
        const inputImageURL = URL.createObjectURL(file);
        const inputImage = document.getElementById('inputImage');
        inputImage.src = inputImageURL;
    
        // Display the grayscale output image
        const outputImage = document.getElementById('outputImage');
        outputImage.src = inputImageURL;
        outputImage.style.filter = 'grayscale(100%)';
      };

  return (
    <div className='gscale'>
         <h1><FaQuoteLeft /> Color Image To Gray Scale <span>Algorithim.. </span><FaQuoteRight /></h1>
         <div className='gscale__input'>

      <input type="file" id="imageInput" accept="image/*" onChange={handleImage} />
         </div>


<div  className="canvas-container">
      <div>
        <h2>Input Image</h2>
        <img id="inputImage" src="" alt="Input" />
      </div>

      <div>
        <h2>Grayscale Output Image</h2>
        <img id="outputImage" src="" alt="Grayscale Output" />
      </div>
    </div>

</div>
  );
};

export default ColorToGray;
