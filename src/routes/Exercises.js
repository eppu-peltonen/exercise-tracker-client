import ExerciseForm from '../components/ExerciseForm'
import DurationChart from '../components/DurationChart'
import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import exerciseService from '../services/exercises'
import Togglable from '../components/Togglable';

import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const Exercises = ({exercises, setExercises, user}) => {

  console.log(exercises)

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
    <Togglable buttonLabel='Add exercise' ref={exerciseFormRef}>
      <ExerciseForm createExercise={addExercise}/>
    </Togglable>
      {
        userExercises.map(exercise => (
          <p key={exercise.id}>
            sport: {exercise.sport},
            start time: {(exercise.start_time.toLocaleString('fi-FI'))},
            duration: {exercise.duration}
          </p>
        ))
      }
    </div>
  )
}

export default Exercises