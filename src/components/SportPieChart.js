import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 800 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]

const SportPieChart = ({exercises}) => {
  return (
    <>
      <h2>Sport distribution</h2>
      <ResponsiveContainer aspect={3}>
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default SportPieChart