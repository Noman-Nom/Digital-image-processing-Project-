import React, { useEffect, useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './PowerLawTransformation.scss'
const PowerLawTransformation = () => {
    const [resultMatrix, setResultMatrix] = useState([]);
    const [inputValues, setInputValues] = useState(Array(4).fill(Array(4).fill(0)));
   const [gamma, setGamma] = useState(0)
   const [gammaValue, setGammaValue] = useState(null)
    // console.log("bitdepth = ",  bitdepth)

    const handleBd = ()=>{

     setGammaValue(gamma)
    //  console.log("gamma value = ", gammaValue)
            
    }

    useEffect(()=>{
        console.log('gamma Value:', gammaValue);
        
    },[gammaValue])
           
    const handleInputChange = (rowIndex, colIndex, event) => {
        const { value } = event.target;
        const newValue = isNaN(value) ? 0 : Math.max(0, Math.min(255, parseInt(value, 10)));

        setInputValues((prevInputValues) => {
            const newInputValues = [...prevInputValues];
            newInputValues[rowIndex] = [...newInputValues[rowIndex]]; // create a copy of the row
            newInputValues[rowIndex][colIndex] = newValue;
            return newInputValues;
        });
    };

    const calculate = () => {
        console.log("gammavalue = ", gammaValue)
        const result = inputValues.map((row) => row.map((value) => {

            const cal  = value/255;
            const res = (cal ** gammaValue ).toFixed(2)
            return res
        } ));

        setResultMatrix(result);
        displayMatrix('resultMatrix', result);
    };

    const displayMatrix = (resultMatrix, result) => {
        const finalMatrix = document.getElementById(resultMatrix);

        while (finalMatrix.rows.length > 0) {
            finalMatrix.deleteRow(0);
        }

        for (let i = 0; i < result.length; i++) {
            const row = finalMatrix.insertRow(i);

            for (let j = 0; j < result[i].length; j++) {
                const col = row.insertCell(j);
                col.appendChild(document.createTextNode(result[i][j]));
            }
        }
    };

  return (
    <div className='tableContainer'>
            <h1><FaQuoteLeft /> Power Law Transformation <span>Algorithim.. </span><FaQuoteRight /></h1>
                    <div className='bitdepth'><input  onChange={(e)=>setGamma(e.target.value)} type="text"  placeholder='Enter Gamma value ' />
                  <div className='calculate-btn'>
                    <button onClick={handleBd}>Calculate γ </button>

                  </div>
                   
                    </div>
            <div className='table__table'>

                <div className='single__table'>
                    <table id="inputMatrix">
                        <tbody>
                            {inputValues.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((value, colIndex) => (
                                        <td key={colIndex}>
                                            <input
                                                value={value}
                                                min="0"
                                               
                                                type="text"
                                                onChange={(e) => handleInputChange(rowIndex, colIndex, e)}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h1>Input Values </h1>
                </div>


                <div className='single__table'>

                    <table id="resultMatrix"></table>
                    <h1>Output Values</h1>
                </div>




            </div>
            <div className='calculate-btnn'>

                <button className='calc' onClick={calculate}>Calculate PLT</button>
            </div>

        </div>
  )
}

export default PowerLawTransformation