import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// import './Chart.scss'


const CustomAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dy={16}
      fontSize={18}
      fill="#fff" // Set the text color to white
      textAnchor="end"
      transform="rotate(-45)"
    >
      {payload.value}
    </text>
  </g>
);

const Equilized = ({ aspect,equilizedValue }) => {
  // console.log("equilizedValue", equilizedValue);  

return (
    <ResponsiveContainer width="100%" aspect={aspect} height="100%">
      <BarChart
        width={500}
        height={300}
        data={equilizedValue}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={10}
      >
        <XAxis  tick={<CustomAxisTick />} dataKey="equiliziedHistogram" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis    tick={{ fill: '#fff' }} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray=".1 .1" />
        <Bar dataKey="normalizeData" fill="#0091CF" background={{ fill: '#0F172A' }} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Equilized;
