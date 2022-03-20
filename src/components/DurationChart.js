import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  {
    timestamp: 'Page A',
    duration: 10
  },
  {
    timestamp: 'Page B',
    duration: 8
  }
]

const DurationChart = () => {
  return (
    <ResponsiveContainer width='100%' aspect={3}>
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
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='timestamp' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='duration' fill='#8884d8' />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default DurationChart