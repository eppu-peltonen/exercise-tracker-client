import {useEffect, useState} from 'react'
import exerciseService from '../services/exercises'

const Exercises = ({user}) => {

  const [exercises, setExercises] = useState([])

  //Get users exercises at the beginning
  useEffect(() => {
    exerciseService
      .getById(user.id)
      .then(initialExercises => {
        //Check duration and fill in zeros if hours, minutes or seconds are not given
        for (var i = 0; i <initialExercises.length; i++) {
          if (initialExercises[i].duration.hours === undefined) {
            initialExercises[i].duration.hours = 0
          }
          if (initialExercises[i].duration.minutes === undefined) {
            initialExercises[i].duration.minutes = 0
          }
          if (initialExercises[i].duration.seconds === undefined) {
            initialExercises[i].duration.seconds = 0
          }

        }
        setExercises(initialExercises)
      })
  }, [user])

  const addExercise = (exerciseObject) => {
    exerciseService
      .create(exerciseObject)
      .then(returnedExercise => {
        setExercises(exercises.concat(returnedExercise))
      })
  }

  return (
    <div>
      {
        exercises.map(exercise => (
          <p key={exercise.id}>
            sport: {exercise.sport},
            start time: {exercise.start_time},
            duration: {exercise.duration.hours}:{exercise.duration.minutes}:{exercise.duration.seconds}
          </p>
        ))
      }
    </div>
  )
}

export default Exercises