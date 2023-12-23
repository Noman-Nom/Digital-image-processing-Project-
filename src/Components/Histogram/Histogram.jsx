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
    </div>


  )
}

export default Histogram