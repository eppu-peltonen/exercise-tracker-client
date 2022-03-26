import {FiActivity, FiHome, FiBarChart2, FiLogIn, FiLogOut} from 'react-icons/fi'
import {Link} from "react-router-dom"
import { Transition } from '@headlessui/react'
import React, {useState} from 'react'

const NavTest = ({user, logout}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
  <>   
    {/* Slider Component Container */}
    <div className="flex flex-col items-center justify-center mt-20">
        <div className="flex flex-col">
            {/* Navbar */}
            <nav className="flex justify-around py-4 bg-white/80
                backdrop-blur-md shadow-md w-full
                fixed top-0 left-0 right-0 z-10">

                {/* Heading container */}
                <div className="flex items-center">
                    <h1 className="text-xl font-extrabold text-blue-600">Exercise Tracker</h1>
                </div>

                {/* Links Section */}
                <div className="items-center hidden space-x-8 sm:flex">

                    <Link to="/" className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300">
                      <FiHome size='28' className="w-7 sm:mx-2 mx-4 inline"/>
                      <span className="hidden sm:inline">Home</span>
                    </Link>

                    {user
                      ? <>
                            
                            <Link to="/exercises" className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300">
                              <FiActivity size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                              <span className="hidden sm:inline">Exercises</span>
                            </Link>       
                            <Link to="/charts" className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300">
                              <FiBarChart2 size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                              <span className="hidden sm:inline">Charts</span>
                            </Link>
                        </>
                      : <div/>              
                    }                      
                <div className="flex items-center space-x-5">

                {user
                 ?
                 <button onClick={logout} className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300">
                              <FiLogOut size='28' className="w-7 sm:mx-2 mx-4 inline" />
                              <span className="hidden sm:inline">Logout</span>
                            </button>
                : <>
                    <a className="flex text-gray-600 hover:text-blue-500
                        cursor-pointer transition-colors duration-300">

                        Register
                    </a>
                    <Link to="/login" className="flex text-gray-600 hover:text-blue-500 
                        cursor-pointer transition-colors duration-300
                        font-semibold">
                            <FiLogIn size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                            <span className="hidden sm:inline">Login</span>
                          </Link>
                  </>
                }
              </div>
              <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
              </div>
              <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
            {
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {
                            user && (   
                              <Link to="/exercises" className="flex font-medium text-gray-300 hover:text-green-600
                        cursor-pointer transition-colors duration-300">
                              <FiActivity size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                              <span>Exercises</span>
                            </Link>  
                            )
                        }   
                        {
                            user && (
                              <Link to="/charts" className="flex font-medium text-gray-300 hover:text-green-600
                        cursor-pointer transition-colors duration-300">
                              <FiBarChart2 size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                              <span>Charts</span>
                            </Link>
                            )
                        }
                        {
                  user
                  ?
                  <button onClick={logout} className="flex font-medium text-gray-300 hover:text-green-600
                        cursor-pointer transition-colors duration-300">
                              <FiLogOut size='28' className="w-7 sm:mx-2 mx-4 inline" />
                              <span>Logout</span>
                            </button>
                  :
                  <Link to="/login" className="flex font-medium text-gray-400 hover:text-green-600
                          cursor-pointer transition-colors duration-300">
                        <FiLogIn size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                        <span>Login</span>
                    </Link>
                }

            </div>
          </div>
        }
        </Transition>
            </nav>
        </div>
    </div>
    </>
  )
}

export default NavTest