import {Link} from "react-router-dom"

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin
}) => {

  return (

    <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
      <header className="max-w-lg mx-auto">
        <div>
          <h1 className="text-5xl font-bold text-white text-center">Exercise Tracker</h1>
        </div>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
            <h3 className="font-bold text-2xl text-gray-700">Welcome!</h3>
            <p className="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" onSubmit={handleLogin}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="username">Username</label>
              <input type="text" id="username" value={username} onChange={({target}) => setUsername(target.value)} className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-400 transition duration-500 px-3 pb-3" />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={({target}) => setPassword(target.value)} className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-400 transition duration-500 px-3 pb-3" />
            </div>
            <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 mt-4 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign In</button>
          </form>
        </section>
      </main>

      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-white text-lg">Don't have an account? <Link to="/register" className="font-bold hover:underline">Sign up</Link>.</p>
      </div>
    </div>



    
  )
}

export default Login