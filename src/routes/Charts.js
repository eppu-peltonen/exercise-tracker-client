import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Charts = ({exercises, user}) => {

  // Get users exercises
  const userExercises = exercises.filter(exercise => exercise.user_id === user.id)

  console.log(userExercises)

  const data = [
    {
      name: 'January',
      Iphone: 4000
    },
    {
      name: "March",
      Iphone: 1000,
    },
    {
      name: "May",
      Iphone: 4000,
    },
    {
      name: "July",
      Iphone: 800,
    },
    {
      name: "October",
      Iphone: 1500,
    },
  ];

  const LineChartTest = () => {
    return (
      <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
        <XAxis dataKey="name" tick={{fill:"#fff"}}/>
        <YAxis tick={{fill:"#fff"}} />
        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
        <Line type="monotone" dataKey="Iphone" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
        
      </LineChart>
    </ResponsiveContainer>
    )
  }

  const DistanceBarChart = () => (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={userExercises}
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
          <Bar maxBarSize={60} dataKey='distance' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
  )

  const AverageHrBarChart = () => (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={userExercises}
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
          <Bar maxBarSize={60} dataKey='avg_hr' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
  )

  const SportPieChart = () => (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={400} height={400}>
          <Pie data={userExercises} dataKey="sport" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer>
  )

  return (
    <div className='mt-10 flex flex-col overflow-auto'>
      {
        exercises.length === 0
        ?
          <div className="text-xl">Add some exercises to see your data.</div>
        :
        <div className='flex flex-col'>
            <LineChartTest/>
            <DistanceBarChart />
            <AverageHrBarChart/>
            <SportPieChart/>
        </div>
      }
      
    </div>
  )
}

export default Charts