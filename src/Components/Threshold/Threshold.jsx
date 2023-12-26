
import React, { useEffect, useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './Threshold.scss'


const Threshold = () => {

    const [resultMatrix, setResultMatrix] = useState([]);
    const [inputValues, setInputValues] = useState(Array(4).fill(Array(4).fill(0)));
   const [threshold, setThreshold] = useState(0)
 const [thresholdValue, setThresholdValue] = useState(0)
    // console.log("bitdepth = ",  bitdepth)

    const handleBd = ()=>{

            setThresholdValue(threshold)
     console.log("threshold value  = ", thresholdValue)
            
    }

    useEffect(()=>{
        console.log('Threshold Value:', thresholdValue);
        
    },[thresholdValue])
           
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
        console.log("threshold value  = ", thresholdValue)
        const result = inputValues.map((row) => row.map((value) => {

                    if(value<=thresholdValue){
                        value = 0
                    }else{
                        value = 1
                    }
            
                    return value
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
    <h1><FaQuoteLeft /> Threshold <span>Algorithim.. </span><FaQuoteRight /></h1>
            <div className='bitdepth'><input  onChange={(e)=>setThreshold(e.target.value)} type="text"  placeholder='Enter Threshold' />
          <div className='calculate-btn'>
            <button onClick={handleBd}>Calculate</button>

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

        <button className='calc' onClick={calculate}>Calculate Threshold</button>
    </div>

</div>
  )
}

export default Threshold