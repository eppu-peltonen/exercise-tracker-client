import ExerciseForm from '../components/ExerciseForm'
import DurationChart from '../components/DurationChart'

const Exercises = ({exercises, user}) => {

  // Filter user exercises
  const userExercises = exercises.filter(exercise => exercise.user_id === user.id)

  /*
  const addExercise = (exerciseObject) => {
    exerciseService
      .create(exerciseObject)
      .then(returnedExercise => {
        setExercises(exercises.concat(returnedExercise))
      })
  }
  */

  return (
    <div>
      
      {
        userExercises.map(exercise => (
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