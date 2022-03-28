import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const DistanceBarChart = ({exercises}) => {

  const data = exercises

  return (
    <div className='flex flex-col'>
      <h2>Distance</h2>
      <ResponsiveContainer aspect={3} width={'70%'}>
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
          <YAxis dataKey='distance' />
          <Tooltip />
          <Legend />
          <Bar dataKey='distance' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DistanceBarChart