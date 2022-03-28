import ExerciseForm from '../components/ExerciseForm'
import React, { useRef } from "react";
import exerciseService from '../services/exercises'
import Togglable from '../components/Togglable';

import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const Exercises = ({exercises, setExercises, user}) => {

  const exerciseFormRef = useRef()

  // Get users exercises
  const userExercises = exercises.filter(exercise => exercise.user_id === user.id)

  const addExercise = (exerciseObject) => {
    exerciseFormRef.current.toggleVisibility()
    exerciseService
      .create(exerciseObject)
      .then(returnedExercise => {
        setExercises(exercises.concat(returnedExercise))
      })
  }

  return (
    <div className='mt-10'>
      <h1 className="text-4xl font-semibold text-green-600 mb-10 flex justify-center">Your exercises</h1>
      <Togglable buttonLabel='Add new exercise' ref={exerciseFormRef}>
        <ExerciseForm createExercise={addExercise}/>
      </Togglable>
      <div className='mt-8'>
        {
          userExercises.map(exercise => (
            <div key={exercise.id} className="border-b border-gray-500 pb-4 grid grid-cols-1 md:grid-cols-5 gap-0">
              <div className='border-1 border-gray-300 rounded'>{exercise.sport}</div>
              <div>{exercise.duration}</div>
              <div>{exercise.distance} km</div>
              <div>{exercise.avg_hr} BPM</div>
              <div>{(exercise.start_time.toLocaleString('fi-FI'))}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Exercises