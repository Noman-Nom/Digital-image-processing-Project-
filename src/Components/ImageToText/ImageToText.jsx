import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Tesseract from 'tesseract.js';
import './ImageToText.scss'

const ImageToText = () => {
  const recognizeText = async (e) => {
    const outputText = document.getElementById('outputText');

    const img = new Image();
    img.onload = async function () {
      // Recognize text
      const { data: { text } } = await Tesseract.recognize(img);

      // Display recognized text
      outputText.textContent = text;
      console.log(text);
    };

    // Load the selected image
    img.src = URL.createObjectURL(e.target.files[0]);
  };

  return (
    <div className='imgToTxt'>

      <h1><FaQuoteLeft /> Image To Text Convertor<span> Algorithim.. </span><FaQuoteRight /></h1>
      <div className='imt__inp'>

        <input type="file" id="imageInput" accept="image/*" onChange={recognizeText} />
      </div>
      <div className='imt__output'>
        <h2 id='outputText'></h2>
      </div>
    </div>
  );
};

export default ImageToText;
