const Charts = ({exercises, user}) => {

  // Get users exercises
  const userExercises = exercises.filter(exercise => exercise.user_id === user.id)

  return (
    <div className='mt-10'>
      {
        userExercises.length === 0
        ?
          <div className="text-xl">Add some exercises to see your data.</div>
        :
        <div>Charts</div>
      }
      
    </div>
  )
}

export default Charts