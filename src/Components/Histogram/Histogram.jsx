import React, { useState } from 'react';
import './Histogram.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Rectangle } from 'recharts';
import Example from '../Example/Example';






const Histogram = () => {
  const [inputData, setinputData] = useState(Array(8).fill(''));
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [size, setSize] = useState(0);

  const handleSize = () => {
    const imageSize = parseInt(width) * parseInt(height);
    setSize(imageSize);
  };

  const handleChange = (index, value) => {
    const newInputData = [...inputData];
    newInputData[index] = value;
    setinputData(newInputData);
  };

  const calculate = () => {
    // Step 1: Normalize the data
    const normalizeData = inputData.map((value) => parseFloat(value) / size);
    console.log("Step 1: Normalized Data =", normalizeData);
    // Step 2: Calculate the Cumulative Distribution Function (CDF)
    const cdf = normalizeData.reduce((accumulator, currentValue, index) => {
      accumulator.push(index > 0 ? accumulator[index - 1] + currentValue : currentValue);
      return accumulator;
    }, []);
  
    console.log("Step 2: Cumulative Distribution Function (CDF) =", cdf);
    // Step 3: Calculate the Equilized Histogram
    const equiliziedHistogram = cdf.map((value) => Math.round(value * 7));
    console.log("Step 3: Equilized Histogram =", equiliziedHistogram);
  
    // Display the steps in a table with each value in a separate cell
    const tableContent = `
      <table border="1">
        <tr>
          <th>Input Values</th>
          <th>Normalized Values</th>
          <th>CDF</th>
          <th>Equilized Histogram</th>
        </tr>
        ${inputData.map((value, index) => `
          <tr>
            <td>${value}</td>
            <td>${normalizeData[index]}</td>
            <td>${cdf[index]}</td>
            <td>${equiliziedHistogram[index]}</td>
          </tr>
        `).join('')}
      </table>
    `;
  
    // Append the table to an element with id 'output'
    document.getElementById('output').innerHTML = tableContent;
  };
  
  return (
    <div className='container'>
      <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} />
      <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />

      <button onClick={handleSize}>Calculate Image Size</button>

      <table id='inputData'>
        {inputData.map((value, index) => (
          <tr key={index}>
            <td>
              <input
                type="text"
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            </td>
          </tr>
        ))}
      </table>

      <button onClick={calculate}>Calculate Histogram</button>


            <div className='Calculatons'>

              <div id='output'></div>
              
            </div>

          


            <div className='chart'>
            <Example aspect={0.8/.5}/>
            </div>
  
    </div>
  );
};

export default Histogram;
