import React from 'react'

import { useState } from 'react'

const Histogram = () => {

  const [inputData, setinputData] = useState(Array(8).fill(''))
  

  const handleChange =  (index,value)=>{

    const newInputData = [...inputData]

    console.log(newInputData)

    newInputData[index] = value
    setinputData(newInputData)

    // console.log("values= ", value) tageting input with index

  }

  const calculate = ()=>{

    const normalizeData = inputData.map((value)=> parseFloat(value)/4096)

    // console.log( "normalizeData = ", normalizeData)
    const cdf = normalizeData.reduce((accumulator , currentValue, index)=>{

      accumulator.push(index > 0 ?  accumulator[index -1 ] +currentValue: currentValue)


      console.log( "cdf=", accumulator)
      return accumulator
    },[])
  }

  return (
    <div className='container'>

      <table id='inputData'>
        {inputData.map((value,index)=>(
            <tr key={index}>
              <td>
                <input type="text"

                  value={value}
                  onChange={(e)=> handleChange(index , e.target.value)}
                />
              </td>

            </tr>

        ))}
      </table>

      <button onClick={calculate}>Calculate</button>
    </div>


  )
}

export default Histogram