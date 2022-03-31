import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend} from 'recharts';

import compare from '../utils/compareStartTime'

var dayjs = require('dayjs')
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)

const Charts = ({exercises, user}) => {

  // Get users exercises and sort by date
  const userExercises = exercises.filter(exercise => exercise.user_id === user.id)
  const sortedUserExercises = userExercises.sort(compare)

  // Get hours from duration to use for calculation
  const graphData = sortedUserExercises
  graphData.map(exercise => (
    exercise.durationHours = parseFloat(exercise.duration.substring(0,2)) + parseFloat(exercise.duration.substring(3,5)/60) + parseFloat(exercise.duration.substring(6,8)/3600)
  ))

  graphData.map(exercise => (
    exercise.distance = parseFloat(exercise.distance)
  ))

  // Get total exercise time
  const totalTimeHours = graphData.reduce((acc, exercise) => acc + exercise.durationHours, 0)

  // Returns time object that contains hours minutes and seconds
  const totalTimeObject = dayjs.duration(totalTimeHours, 'h')

  // Get average heart rate
  const avgHeartRate = graphData.reduce((acc, exercise) => acc + exercise.avg_hr, 0) / graphData.length

  // Get total distance
  const totalDistance = graphData.reduce((acc, exercise) => acc + exercise.distance, 0)

  // Get average speed
  const avgSpeed = totalDistance / totalTimeHours

  //

  return (
    <div className="flex flex-row flex-wrap flex-grow mt-2">

<div className="w-full md:w-1/2 xl:w-1/4 p-3">
          {/*Graph Card*/}
          <div className="bg-gray-700 border-2 border-gray-500 rounded shadow">
              <div className="border-b-2 border-gray-500 p-3">
                  <h5 className="font-bold uppercase text-gray-300">Total time</h5>
              </div>
              <div className="p-5 text-gray-300">
                {(totalTimeObject.$d.days * 24) + (totalTimeObject.$d.hours)} h {totalTimeObject.$d.minutes} min {totalTimeObject.$d.seconds} s
              </div>
          </div>
          {/*/Graph Card*/}
      </div>

      <div className="w-full md:w-1/2 xl:w-1/4 p-3">
          {/*Graph Card*/}
          <div className="bg-gray-700 border-2 border-gray-500 rounded shadow">
              <div className="border-b-2 border-gray-500 p-3">
                  <h5 className="font-bold uppercase text-gray-300">Total distance</h5>
              </div>
              <div className="p-5 text-gray-300">
              {totalDistance} km
              </div>
          </div>
          {/*/Graph Card*/}
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          {/*Graph Card*/}
          <div className="bg-gray-700 border-2 border-gray-500 rounded shadow">
              <div className="border-b-2 border-gray-500 p-3">
                  <h5 className="font-bold uppercase text-gray-300">Average heart rate</h5>
              </div>
              <div className="p-5 text-gray-300">
                {avgHeartRate} bpm
              </div>
          </div>
          {/*/Graph Card*/}
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-3">
          {/*Graph Card*/}
          <div className="bg-gray-700 border-2 border-gray-500 rounded shadow">
              <div className="border-b-2 border-gray-500 p-3">
                  <h5 className="font-bold uppercase text-gray-300">Average speed</h5>
              </div>
              <div className="p-5 text-gray-300">
                {avgSpeed.toFixed(2)} km/h
              </div>
          </div>
          {/*/Graph Card*/}
      </div>

      <div className="w-full md:w-1/2 p-3">
          {/*Graph Card*/}
          <div className="bg-gray-700 border-2 border-gray-500 rounded shadow">
            <div className="border-b-2 border-gray-500 p-3">
                <h5 className="font-bold uppercase text-gray-300">Average heart rate</h5>
            </div>
            <div className="p-5">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                width={500}
                height={400}
                data={graphData}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="start_time" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="avg_hr" stroke="#4ade80" fill="#4ade80" />
              </AreaChart>
            </ResponsiveContainer>
            </div>
          </div>
          {/*/Graph Card*/}
      </div>

      <div className="w-full md:w-1/2 p-3">
          {/*Graph Card*/}
          <div className="bg-gray-700 border-2 border-gray-500 rounded shadow">
              <div className="border-b-2 border-gray-500 p-3">
                  <h5 className="font-bold uppercase text-gray-300">Duration</h5>
              </div>
              <div className="p-5">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    width={500}
                    height={400}
                    data={graphData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="start_time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="durationHours" stroke=" #4ADECA" fill=" #4ADECA" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
          </div>
          {/*/Graph Card*/}
      </div>

      <div className="w-full md:w-1/2 p-3">
          {/*Graph Card*/}
          <div className="bg-gray-700 border-2 border-gray-500 rounded shadow">
              <div className="border-b-2 border-gray-500 p-3">
                  <h5 className="font-bold uppercase text-gray-300">Distance</h5>
              </div>
              <div className="p-5">
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart
                    width={500}
                    height={400}
                    data={graphData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="start_time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="distance" stroke=" #de4aa8" fill=" #de4aa8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
          </div>
          {/*/Graph Card*/}
      </div>

      
    </div>
  )
}

export default Charts