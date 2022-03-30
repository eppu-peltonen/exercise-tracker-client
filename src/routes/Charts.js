import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const Charts = ({exercises, user}) => {

  // Get users exercises
  const userExercises = exercises.filter(exercise => exercise.user_id === user.id)

  return (
    <div className=''>
      {
        userExercises.length === 0
        ?
          <div className="">Add some exercises to see your data.</div>
        :
        <div className="">
        <ResponsiveContainer width="50%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={userExercises}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="avg_hr" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
      }
      
    </div>
  )
}

export default Charts