import React, { useRef, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './ThresholdAlg.scss'

const ThresholdAlg = () => {
    const imageInputRef = useRef(null);

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

            // Apply thresholding
            const thresholdValue = document.getElementById('thresholdValue').value;
            applyThreshold(imageData, thresholdValue);

            // Put the modified image data back to the output canvas
            outputCtx.putImageData(imageData, 0, 0);
        };

        // Load the selected image
        img.src = URL.createObjectURL(e.target.files[0]);
    };

    const applyThreshold = (imageData, threshold) => {
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const grayValue = (data[i] + data[i + 1] + data[i + 2]) / 3;

            // Apply thresholding
            const newValue = grayValue > threshold ? 255 : 0;

            data[i] = newValue; // Red
            data[i + 1] = newValue; // Green
            data[i + 2] = newValue; // Blue
            // Alpha channel (data[i + 3]) is not modified for simplicity
        }
    };

    const updateThreshold = () => {
        const thresholdValue = document.getElementById('thresholdValue').value;
        document.getElementById('thresholdDisplay').textContent = thresholdValue;

        // Reload image with the updated threshold value
        const imageInput = imageInputRef.current;
        if (imageInput.files.length > 0) {
            handleImage({ target: { files: [imageInput.files[0]] } });
        }
    };

    useEffect(() => {
        // Set initial threshold display
        updateThreshold();
    }, []);

    return (
        <div className='gscale'>

<h1><FaQuoteLeft /> Thresholding <span>Algorithim.. </span><FaQuoteRight /></h1>

                    <div className='gscale__input'>
            <input type="file" id="imageInput" accept="image/*" ref={imageInputRef} onChange={handleImage} />
            <label htmlFor="thresholdValue">Threshold Value:</label>
            <input type="range" id="thresholdValue" min="0" max="255" defaultValue="128" onChange={updateThreshold} />
            <span id="thresholdDisplay">128</span>
                    </div>

            <div className='canvas-container'>

                <canvas id="inputCanvas" width="500" height="500"></canvas>
                <canvas id="outputCanvas" width="500" height="500"></canvas>
            </div>
        </div>
    );
};

export default ThresholdAlg;
