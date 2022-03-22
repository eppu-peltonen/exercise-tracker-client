import React, {useEffect, useState} from 'react'

// Router
import {Routes, Route} from 'react-router-dom'

//Routes
import Login from './routes/Login'
import Exercises from './routes/Exercises'
import Charts from './routes/Charts'
import Home from './routes/Home'

//Services
import loginService from './services/login'
import exerciseService from './services/exercises'

//Components
import Notification from './components/Notification'
import ExerciseForm from './components/ExerciseForm'
import DurationChart from './components/DurationChart'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// =============================================================================
//                                   TODO
// =============================================================================
// - CSS: vaihda material UI / react bootstrap?
// - Tee Login toiminnallisuus loppuun
// - Login: Sign up linkki johtaa rekisteröinti sivulle. Käytä samaa linkitystä kuin navigaatiossa ja lisää App componenttiin oikea <Route>
// - Navigaatio: kirjautumattoman näkymä: home ja login. kirjautuneen näkymä: home, logout, exercises, charts
// - Login serviceen "logout" funktio ja johonkin renderöidään logout nappi
// - Exercise näkymän tekeminen
// - Charts näkymän tekeminen

const App = () => {

  const [exercises, setExercises] = useState([])
  const [errorMessage, setErrorMessage] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  //Get all exercises at the beginning
  useEffect(() => {
    exerciseService
      .getAll()
      .then(initialExercises => {
        setExercises(initialExercises)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedExerciseAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      exerciseService.setToken(user.token)
    }
  }, [])

  const addExercise = (exerciseObject) => {
    exerciseService
      .create(exerciseObject)
      .then(returnedExercise => {
        setExercises(exercises.concat(returnedExercise))
      })
  }

  const exerciseContainer = () => {
    return (
      <div>
        <ExerciseForm createExercise={addExercise}/>
        <DurationChart/>
      </div>
    )
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password
      })
      console.log(user)
      window.localStorage.setItem('loggedExerciseAppUser', JSON.stringify(user))
      exerciseService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }
  
  // Vanha runko malliksi jos tarvii
  /*
  <div className='flex'>
    <SideBar/>
    <h1>
      Exercise tracker
    </h1>
    <Notification message={errorMessage}/>
    {
      user === null ?
        loginForm() :
        <div>
          <p>{user.username} logged in</p>
          {exerciseContainer()}
        </div>
    }
  </div>
  */

  return (
    <>
      <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden h-screen">
        <Navigation/>
        <main role="main" className="w-full h-full flex-grow p-3 overflow-auto">
            <h1 className="text-6xl md:text-5xl mb-4 font-extrabold text-blue-600">Exercise Tracker</h1>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/" element={<Home />} />
            </Routes>
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default App

