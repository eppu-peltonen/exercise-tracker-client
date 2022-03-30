import './App.css'

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
    <div className='App h-screen overflow-auto'>
    <Navigation user={user} logout={handleLogout}/>

    {/* Container */}
    <div className='container w-full mx-auto pt-20'>
      <div className="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
        
        {
          user
          ?
          <>
            {/*Console Content*/}
          <div className="flex flex-wrap">

            <Notification message={message} />
            <Routes>
            <Route path="/" element={
                <Exercises
                  exercises={exercises}
                  setExercises={setExercises}
                  user={user}
                />
              }
            />
            
          </Routes>
        </div>
      {/* Console Content */}

      {/*Divider*/}
      <hr className="border-b-2 border-gray-600 my-8 mx-4"/> 
          
      <div className="flex flex-row flex-wrap flex-grow mt-2">
              <Charts
                exercises={exercises}
                user={user}
              />
            <div className="w-full md:w-1/2 p-3">
                {/*Graph Card*/}
                <div className="bg-gray-800 border border-gray-700 rounded shadow">
                    <div className="border-b border-gray-700 p-3">
                        <h5 className="font-bold uppercase text-gray-500">Graph</h5>
                    </div>
                    <div className="p-5">
                    {/* TÄHÄN CHART */}
                    </div>
                </div>
                {/*/Graph Card*/}
            </div>

            <div className="w-full md:w-1/2 p-3">
                {/*Graph Card*/}
                <div className="bg-gray-800 border border-gray-700 rounded shadow">
                    <div className="border-b border-gray-700 p-3">
                        <h5 className="font-bold uppercase text-gray-500">Graph</h5>
                    </div>
                    <div className="p-5">
                      {/* TÄHÄN CHART */}
                    </div>
                </div>
                {/*/Graph Card*/}
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                {/*Graph Card*/}
                <div className="bg-gray-800 border border-gray-700 rounded shadow">
                    <div className="border-b border-gray-700 p-3">
                        <h5 className="font-bold uppercase text-gray-500">Graph</h5>
                    </div>
                    <div className="p-5">
                      {/* TÄHÄN CHART */}
                    </div>
                </div>
                {/*/Graph Card*/}
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                {/*Graph Card*/}
                <div className="bg-gray-800 border border-gray-700 rounded shadow">
                    <div className="border-b border-gray-700 p-3">
                        <h5 className="font-bold uppercase text-gray-500">Graph</h5>
                    </div>
                    <div className="p-5">
                      {/* TÄHÄN CHART */}
                    </div>
                </div>
                {/*/Graph Card*/}
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
                {/*Template Card*/}
                <div className="bg-gray-800 border border-gray-700 rounded shadow">
                    <div className="border-b border-gray-700 p-3">
                        <h5 className="font-bold uppercase text-gray-500">Graph</h5>
                    </div>
                    <div className="p-5">
          
                    </div>
                </div>
                {/*/Template Card*/}
            </div>
          </div>

          </>
          :
            <>
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
            </Routes>
            </>
        }

      </div>
    </div>
    {/* Container */}
    <Footer />
  </div>

  )
}

export default App

