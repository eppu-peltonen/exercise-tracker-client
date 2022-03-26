import React, {useState} from 'react'
import {FiActivity, FiBarChart2, FiLogIn, FiLogOut} from 'react-icons/fi'
import {Link} from "react-router-dom"
import { Transition } from '@headlessui/react'

const NavTest2 = ({user, logout}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
<div>
      <nav className="bg-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/">
                    <svg
                        //xmlns="http://www.w3.org/2000/svg"
                        className="text-green-600 fill-current h-8 w-8"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                    </svg>	
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                {
                    user && (
                      <Link to="/exercises" className="flex font-medium text-gray-300 hover:text-green-600
                        cursor-pointer transition-colors duration-300">
                              <FiActivity size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                              <span className="hidden sm:inline">Exercises</span>
                            </Link>  
                    )
                }
                {
                    user && (
                      <Link to="/charts" className="flex font-medium text-gray-300 hover:text-green-600
                        cursor-pointer transition-colors duration-300">
                              <FiBarChart2 size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                              <span className="hidden sm:inline">Charts</span>
                            </Link>
                    )
                }
                {
                  user
                  ?
                  <button onClick={logout} className="flex font-medium text-gray-300 hover:text-green-600
                        cursor-pointer transition-colors duration-300">
                              <FiLogOut size='28' className="w-7 sm:mx-2 mx-4 inline" />
                              <span className="hidden sm:inline">Logout</span>
                            </button>
                  :
                  <Link to="/login" className="flex font-medium text-gray-300 hover:text-green-600
                          cursor-pointer transition-colors duration-300">
                        <FiLogIn size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                        <span className="hidden sm:inline">Login</span>
                    </Link>
                }
                </div>
              </div>
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
  )
}

export default NavTest2
