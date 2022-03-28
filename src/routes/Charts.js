import { BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Charts = ({exercises, user}) => {

  // Get users exercises
  const userExercises = exercises.filter(exercise => exercise.user_id === user.id)

  const data = userExercises

  const DistanceBarChart = () => (
    <div>
      <h2>Distance</h2>
      <ResponsiveContainer width={700} height="80%">
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

  const AverageHrBarChart = () => {
  
    return (
      <div>
        <h2>Average heart rate</h2>
        <ResponsiveContainer width={700} height="80%">
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

  const SportPieChart = () => {
    return (
      <div>
        <h2>Sport distribution</h2>
        <ResponsiveContainer width={700} height="80%">
          <PieChart width={400} height={400}>
            <Pie data={data} dataKey="sport" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className='mt-10'>
      {
        exercises.length === 0
        ?
          <div className="text-xl">Add some exercises to see your data.</div>
        :
        <div className='flex flex-col'>
          <DistanceBarChart />
          <AverageHrBarChart/>
          <SportPieChart/>
        </div>
      }
      
    </div>
  )
}

export default Charts