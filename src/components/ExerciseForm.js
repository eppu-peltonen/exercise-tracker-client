import React, {useState} from 'react'

const ExerciseForm = ({createExercise}) => {

  const [newExercise, setNewExercise] = useState([])

  const handleExerciseChange = (event) => {
    setNewExercise(event.target.value)
  }

  //TODO: add calendar to set start timestamp
  const addExercise = (event) => {
    event.preventDefault()
    createExercise({
      sport: newExercise.sport,
      start_time: newExercise.start_time,
      duration: newExercise.duration,
      distance: newExercise.distance,
      avgHR: newExercise.avg_hr
    })
    setNewExercise('')
  }
  return(
    <div className = 'd-flex justify-content-center align-items-center'>
      <h2>Add new exercise</h2>
      <form onSubmit={addExercise}>
        <div className="mt-2 form-group">
          Sport
          <input type="text" className="form-control" value={newExercise.sport} onChange={handleExerciseChange} id="sport" placeholder="Enter sport"/>
        </div>
        <div className="mt-2 form-group">
          Start date and time
          <input type="text" className="form-control" value={newExercise.sport} onChange={handleExerciseChange} id="sport" placeholder="Enter start date and time"/>
        </div>
        <div className="mt-2 form-group">
          Duration
          <input type="text" className="form-control" value={newExercise.duration} onChange={handleExerciseChange} id="sport" placeholder="Enter duration"/>
        </div>
        <div className="mt-2 form-group">
          Distance
          <input type="text" className="form-control" value={newExercise.distance} onChange={handleExerciseChange} id="sport" placeholder="Enter distance"/>
        </div>
        <div className="mt-2 form-group">
          Average heart rate
          <input type="text" className="form-control" value={newExercise.avg_hr} onChange={handleExerciseChange} id="sport" placeholder="Enter average heart rate"/>
        </div>
        <button type="submit" className="mt-4 btn btn-primary">Save</button>
      </form>
    </div>
  )
}

export default ExerciseForm