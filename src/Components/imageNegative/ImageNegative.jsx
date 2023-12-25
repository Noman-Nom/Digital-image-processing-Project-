import React, { useState } from 'react';

const ImageNegativeAlgorithm = () => {
  const [resultMatrix, setResultMatrix] = useState([]);
  
  const getMatrix = () => {
    const table = document.getElementById("inputMatrix");
    const values = [];

    for (let i = 0; i < table.rows.length; i++) {
      values[i] = [];

      for (let j = 0; j < table.rows[i].cells.length; j++) {
        const input = table.rows[i].cells[j].querySelector('input');
        values[i][j] = parseInt(input.value, 10);
      }
    }

    console.log("input matrix =", values);
    return values;
  };

  const calculate = () => {
    const inputMatrix = getMatrix();
    const result = inputMatrix.map((row) =>
      row.map((value) => {
        console.log(`15 - ${value} = ${15 - value}`);
        return 15 - value;
      })
    );

    console.log("Result Matrix", result);
    setResultMatrix(result);
    displayMatrix('resultMatrix', result);
  };

  const displayMatrix = (resultMatrix, result) => {
    const finalMatrix = document.getElementById(resultMatrix);
    console.log(finalMatrix);

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
    <div>
      <h1>Image Negative Algorithm</h1>
      <div className="container">
        <h4>Enter Your Values between (0-15)</h4>
        <table id="inputMatrix">
          <tbody>
            <tr>
              <td><input value="0" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
            </tr>
            <tr>
              <td><input value="0" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
            </tr>
            <tr>
              <td><input value="0" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
            </tr>
            <tr>
              <td><input value="0" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
              <td><input value="0" min="0" max="15" type="text" /></td>
            </tr>
          </tbody>
        </table>
        <button onClick={calculate}>Calculate Negative</button>
        <h3>Result:</h3>
        <table id="resultMatrix"></table>
      </div>
    </div>
  );
};

export default ImageNegativeAlgorithm;
