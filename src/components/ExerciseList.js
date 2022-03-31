import ExerciseForm from './ExerciseForm'
import React, { useRef } from "react";
import exerciseService from '../services/exercises'
import Togglable from './Togglable';

import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import Divider from './Divider';
import Charts from './Charts';

import compare from '../utils/compareStartTime'


const Exercises = ({exercises, setExercises, user}) => {

  const exerciseFormRef = useRef()

  // Get users exercises and sort by date
  const userExercises = exercises.filter(exercise => exercise.user_id === user.id)
  const sortedUserExercises = userExercises.sort(compare)

  const addExercise = (exerciseObject) => {
    exerciseFormRef.current.toggleVisibility()
    exerciseService
      .create(exerciseObject)
      .then(returnedExercise => {
        setExercises(exercises.concat(returnedExercise))
      })
  }

  return (
    <>
      <Togglable buttonLabel='Add new exercise' ref={exerciseFormRef}>
        <ExerciseForm createExercise={addExercise}/>
      </Togglable>

      <Divider />

      {
        userExercises.length === 0
        ?
          <div className="text-xl p-3 text-gray-300 bg-gray-700 border border-gray-500 rounded shadow mt-10 flex justify-center">
            <span>Start by adding some exercises.</span>
          </div>
        :
        <div className="bg-gray-700 border-2 border-gray-500 rounded shadow mt-10">
        <div className="border-b-2 border-gray-500 p-3">
          <h5 className="font-bold uppercase text-gray-300">Exercises</h5>
        </div>
        <div className="p-5">
          {
            sortedUserExercises.map(exercise => (
              <div key={exercise.id} className=" text-gray-300 border-b border-gray-400 my-2 grid grid-cols-1 md:grid-cols-5">
                <div>{exercise.sport}</div>
                <div>{exercise.duration}</div>
                <div>{exercise.distance} km</div>
                <div>{exercise.avg_hr} BPM</div>
                <div>{(exercise.start_time.toLocaleString('fi-FI')).substring(0,10)}</div>
              </div>
            ))
          }
        </div>
      </div>
      }
    </>
  )
}

export default Exercises