import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

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

const Example = ({ aspect, chartData }) => {
  return (
    <ResponsiveContainer width="100%" aspect={aspect} height="100%">
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={10}
      >
        <XAxis
          stroke="gray"
          dataKey="intensity"
          scale="point"
          padding={{ left: 10, right: 10 }}
          tick={<CustomAxisTick />}
        />
        <YAxis
          tick={{ fill: '#fff' }} // Set the tick color to white
        />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray=".1 .5" />
        <Bar dataKey="normalizeData" fill="#0091CF" background={{ fill: '#0F172A' }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Example;
