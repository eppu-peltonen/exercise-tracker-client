import ExerciseForm from '../components/ExerciseForm'
import React, { useRef } from "react";
import exerciseService from '../services/exercises'
import Togglable from '../components/Togglable';

import "react-datepicker/dist/react-datepicker.css";
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


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

  function compare(a, b) {
    if ( a.start_time < b.start_time ){
      return -1;
    }
    if ( a.start_time > b.start_time ){
      return 1;
    }
    return 0;
  }
  
  return (
    <div className='w-full flex flex-col justify-center'>
      <Togglable buttonLabel='Add new exercise' ref={exerciseFormRef}>
        <ExerciseForm createExercise={addExercise}/>
      </Togglable>

      <div className="bg-gray-800 border border-gray-700 rounded shadow mt-10">
        <div className="border-b border-gray-700 p-3">
          <h5 className="font-bold uppercase text-gray-600">Exercises</h5>
        </div>
        <div className="p-5">
          {
            userExercises.length === 0
            ?
              <div className="">Start by adding a new exercise.</div>
            :
              sortedUserExercises.map(exercise => (
                <div key={exercise.id} className=" text-gray-400 border-b border-gray-400 my-2 grid grid-cols-5">
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

      <div className='mt-10'>
       
      </div>
    </div>
  )
}

export default Exercises