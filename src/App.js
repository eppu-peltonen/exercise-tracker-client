import React, {useEffect, useState} from 'react'

// Router
import {Routes, Route, useNavigate} from 'react-router-dom'

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

import NavTest from './components/NavTest'
import NavTest2 from './components/NavTest2'


// =============================================================================
//                                   TODO
// =============================================================================
// - CSS
// - Login: Sign up linkki johtaa rekisteröinti sivulle. Käytä samaa linkitystä kuin navigaatiossa ja lisää App componenttiin oikea <Route>
// - Exercise näkymän tekeminen
// - Exercise näkymään tuntien ja kilsojen ja ym yhteismäärä ja keskiarvoja ja muuta mitä keksii
// - Charts näkymän tekeminen



const App = () => {

  const [message, setMessage] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedExerciseAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      exerciseService.setToken(user.token)
    }
  }, [])

  //Navigator to use after login and logout events
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

  const handleLogout = () => {
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

  return (
    <>
      <div className="w-full flex flex-col overflow-hidden h-screen">
        <NavTest2 user={user} logout={handleLogout}/>
        {/* <NavTest user={user} logout={handleLogout}/> */}
        {/* <Navigation user={user} logout={handleLogout}/> */}

        <div role="main" className="w-full h-full flex-grow flex justify-center p-5 overflow-auto">
          <Notification message={message} />
          <Routes>
            <Route path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleLogin={handleLogin} />} />
            <Route path="/exercises" element={<Exercises user={user}/>} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App

