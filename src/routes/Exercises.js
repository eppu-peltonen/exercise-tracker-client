import ExerciseList from '../components/ExerciseList'
import Divider from '../components/Divider'
import Charts from '../components/Charts'

const Exercises = ({exercises, setExercises, user}) => {
  return (
    <div className="flex flex-grow">
      <ExerciseList exercises={exercises} setExercises={setExercises} user={user} />
      <Divider/>
      <Charts exercises={exercises} user={user} />
    </div>
  )
}

export default Exercises