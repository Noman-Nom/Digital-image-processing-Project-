import React, { useEffect } from 'react'
import './Histogram.scss'
import { useState } from 'react'

const Histogram = () => {

  const [inputData, setinputData] = useState(Array(8).fill(''))

  const [v1, setV1] = useState('')
  const [v2, setV2] = useState('')

  const [size, setSize] = useState(0)

 

  console.log(typeof v1)
  console.log(typeof v2)





  const handleSize = () => {

    const sizeOfImage = parseInt(v1) * parseInt(v2)

    setSize(sizeOfImage)
  }

  console.log("size = ", size)


  const handleChange = (index, value) => {



    const newInputData = [...inputData]

    console.log(newInputData)

    newInputData[index] = value
    setinputData(newInputData)

    // console.log("values= ", value)
    // tageting input with index

  }


  const calculate = () => {




    const normalizeData = inputData.map((value) => parseFloat(value) / size)

    console.log("normalizeData = ", normalizeData)
    const cdf = normalizeData.reduce((accumulator, currentValue, index) => {

      accumulator.push(index > 0 ? accumulator[index - 1] + currentValue : currentValue)


      // console.log( "cdf=", accumulator)
      return accumulator
    }, [])

    console.log("CDF = ", cdf)

    const equiliziedHistogram = cdf.map((value) => (Math.round(value * 7)))


            console.log("equi" , equiliziedHistogram) // this ans displayed in second time clicked why ?



  }

  return (
    <div className='container'>


      <input type="text" value={v1} onChange={(e) => setV1(e.target.value)} />
      <input type="text" value={v2} onChange={(e) => setV2(e.target.value)} />

      <button onClick={handleSize}>Calculaate image Size </button>


      <table id='inputData'>
        {inputData.map((value, index) => (
          <tr key={index}>
            <td>
              <input type="text"

                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
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