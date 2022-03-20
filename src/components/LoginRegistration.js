import React from 'react'

const LoginRegistration = ({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin
}) => {
  return (
    <div className = 'd-flex justify-content-center align-items-center'>
      <form onSubmit={handleLogin}>
        <div className="mt-2 form-group">
          Username
          <input type="text" className="form-control" value={username} onChange={({target}) => setUsername(target.value)} id="username" placeholder="Enter username"/>
        </div>
        <div className="mt-2 form-group">
          Password
          <input type="password" className="form-control" value={password} onChange={({target}) => setPassword(target.value)} id="password" placeholder="Password"/>
        </div>
        <div className='row'>
          <div className='col'>
            <button type="submit" className="mt-4 btn btn-primary">Sign in</button>
          </div>
          <div className='col'>
            <div className='mt-3'>
              Don&apos;t have an account? <span className="text-primary">Sign up!</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginRegistration