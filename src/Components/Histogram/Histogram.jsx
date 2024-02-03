import React, { useEffect, useState } from 'react';
// import './Histogram.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Rectangle } from 'recharts';
import Example from '../Example/Example';
import Equilized from '../Equilized/Equilized';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const Histogram = () => {
  const [inputData, setinputData] = useState(Array(8).fill(''));
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [size, setSize] = useState(0);
  const [chartData, setChartData] = useState([])

  const [equilizedValue, setEquilizedValue] = useState([])

  const inputIntensity = [0, 1, 2, 3, 4, 5, 6, 7]

  const handleSize = () => {
    const imageSize = parseInt(width) * parseInt(height);
    setSize(imageSize);
  };

  const handleChange = (index, value) => {
    const newInputData = [...inputData];
    newInputData[index] = value;
    setinputData(newInputData);
  };

  useEffect(() => {
    // This effect will run whenever chartData is updated
    // console.log("chartData", chartData);
  }, [chartData]);

  useEffect(() => {

  }, [equilizedValue]);

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


    const data = inputIntensity.map((intensity, index) => ({
      intensity,
      normalizeData: normalizeData[index]
    }))
    setChartData(data)

    const equilized = inputIntensity.map((intensity, index) => ({
      equiliziedHistogram: equiliziedHistogram[index],
      normalizeData: normalizeData[index]
    }))


    //  console.log("transform=", equilized) 
    setEquilizedValue(equilized)



    // console.log( "chartdata",chartData)

    // Display the steps in a table with each value in a separate cell
    const tableContent = `
      <table border="1">
        <tr>
          <th>Input Intensity</th>
          <th>Input Values</th>
          <th>Normalized Values</th>
          <th>CDF</th>
          <th>Equilized Histogram</th>
        </tr>
        ${inputData.map((value, index) => `
          <tr>

            <td>${inputIntensity[index]}</td>
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
    <div className='tableContainer'>
      <h1><FaQuoteLeft /> Histogram Equilization <span>Algorithim.. </span><FaQuoteRight /></h1>
      <div className='bitdepthh'>

        <div className='input'>

          <input type="text" value={width} placeholder='Enter Width' onChange={(e) => setWidth(e.target.value)} />
          <span>X</span>
          <input type="text" value={height} placeholder='Enter Height' onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div className='calculate-btn'>

          <button onClick={handleSize}>Calculate Image Size</button>
        </div>
      </div>

      <div className='table__table'>

        <div className='single__table'>

          <table id='inputData'>

            <tr>
              <th>Input Intensity</th>
              <th>Input Values</th>
            </tr>
            {inputData.map((value, index) => (
              <tr key={index}>
                <td>{inputIntensity[index]}</td>
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
        </div>

        

          <div className='single__table' id='output'></div>

        
      </div>

      <div className='calculate-btnn'>

      <button onClick={calculate}>Calculate Histogram</button>
      </div>








      <div className='chart'>
        <Example aspect={0.8 / .5} chartData={chartData} />
        <Equilized aspect={0.8 / .5} equilizedValue={equilizedValue} />
      </div>

    </div>
  );
};

export default Histogram;
