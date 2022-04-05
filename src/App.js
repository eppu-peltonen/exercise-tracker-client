import './App.css'
import React, {useEffect, useState} from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Register from './routes/Register'
import Login from './routes/Login'
import Exercises from './routes/Exercises'
import loginService from './services/login'
import exerciseService from './services/exercises'
import userService from './services/users'
import Navigation from './components/Navigation'

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

  // Get users exercises
  useEffect(() => {
    if (user) {
      exerciseService
        .getById(user)
        .then(returnedExercises => {
          setExercises(returnedExercises)
        }) 
        .catch(error => console.log(error))
    }
  }, [user])

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
    } catch (exception) {
      setMessage('Unknown username or password')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedExerciseAppUser')
    setUser(null)
    setMessage(`${user.username} logged out`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const handleRegister = async (event) => {
    event.preventDefault()

    const result = await userService.addUser({
      newUser, newPassword
    })
    setMessage(result)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    setNewUser('')
    setNewPassword('')
    navigate('/')
  }

  return (
      <div>
        {
          user
          ?
          <div className='App w-full h-screen overflow-auto flex flex-col'>
            <Navigation user={user} logout={handleLogout}/>
              {/* Container */}
              <div className='container w-full xl:max-w-5xl mx-auto pt-20 h-screen flex flex-col'>
                <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal flex flex-col">
                  {/*Exercises*/}
                  <Routes>
                    <Route path="/" element={
                        <Exercises
                          exercises={exercises}
                          setExercises={setExercises}
                          user={user}
                          message={message}
                        />
                      }
                    />
                  </Routes> 
                  {/*Exercises*/}
                </div>
              </div>
              {/* Container */}
          </div>
          :
            <div className='Login'>
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
                path="/"
                element={
                  <Login
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    message={message}
                  />
                }
              />
              </Routes>
            </div>
        }
        </div>
  )
}

export default App

