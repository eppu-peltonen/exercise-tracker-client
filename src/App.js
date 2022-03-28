import React, {useEffect, useState} from 'react'

// Router
import {Routes, Route, useNavigate} from 'react-router-dom'

//Routes
import Register from './routes/Register'
import Login from './routes/Login'
import Exercises from './routes/Exercises'
import Charts from './routes/Charts'
import Home from './routes/Home'

//Services
import loginService from './services/login'
import exerciseService from './services/exercises'
import userService from './services/users'

//Components
import Notification from './components/Notification'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const App = () => {

  const [message, setMessage] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [exercises, setExercises] = useState([])

  const [newUser, setNewUser] = useState('')
  const [newPassword, setNewPassword] = useState('')

  //Find and set user at the beginning if stored
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedExerciseAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      exerciseService.setToken(user.token)
    }
  }, [])

  // Get users exercises at the beginning
  useEffect(() => {
    exerciseService
      .getAll()
      .then(initialExercises => {
        setExercises(initialExercises)
      })
  }, [])

  let navigate = useNavigate()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem('loggedExerciseAppUser', JSON.stringify(user))
      exerciseService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      // Navigate to home page after login
      navigate('/')
      window.location.reload()
    } catch (exception) {
      setMessage('wrong credentials')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedExerciseAppUser')
    setUser(null)
    // Navigate to home page after logout
    navigate('/')
    window.location.reload()
    setMessage(`${user.username} logged out`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      await userService.addUser({
        newUser, newPassword
      })
      setUsername('')
      setPassword('')
      navigate('/login')
    } catch (exception) {
      setMessage("username already registered")
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  return (
    <div>
      <div className="w-full h-screen flex flex-col">
        <Navigation user={user} logout={handleLogout}/>
        <div className="flex flex-grow justify-center overflow-auto h-full">
          <Notification message={message} />
          <Routes>
            <Route
              path="/register"
              element={
                <Register
                  handleRegister={handleRegister}
                  newUser={newUser}
                  setNewUser={setNewUser}
                  newPassword={newPassword}
                  setNewPassword={setNewPassword}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin} 
                />
              }
            />
            <Route
              path="/exercises"
              element={
                <Exercises
                  exercises={exercises}
                  setExercises={setExercises}
                  user={user}
                />
              }
            />
            <Route
              path="/charts"
              element={
                <Charts
                  exercises={exercises}
                  user={user}
                />
              }
            />
            <Route
              path="/"
              element={
                <Home />
              }  
            />
          </Routes>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App

