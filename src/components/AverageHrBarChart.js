import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const AverageHrBarChart = ({exercises}) => {

  const data = exercises

  return (
    <div className='flex flex-col'>
      <h2>Average heart rate</h2>
      <ResponsiveContainer aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid width={'100%'} strokeDasharray='3 3' />
          <XAxis dataKey='start_time' />
          <YAxis dataKey='avg_hr' />
          <Tooltip />
          <Legend />
          <Bar dataKey='avg_hr' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageHrBarChart