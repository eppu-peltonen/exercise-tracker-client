import React, {useState} from 'react'
import {FiActivity, FiBarChart2, FiLogIn, FiLogOut} from 'react-icons/fi'
import {Link} from "react-router-dom"
import { Transition } from '@headlessui/react'

const Navigation = ({user, logout}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

  <nav id="header" className="bg-gray-800 fixed w-full z-10 top-0 pb-3 shadow">
		<div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3">
				
			<div className="w-1/2 pl-2 md:pl-0">
				<Link to='/' className="text-gray-100 text-base xl:text-xl no-underline hover:no-underline font-bold"> 
					<FiActivity/><span>Exercise Tracker</span>
				</Link>
      </div>
			<div className="w-1/2 pr-0">
				<div className="flex relative float-right">
				
				  <div className="relative text-sm text-gray-100">
            {
              user ?
                <button onClick={logout} className="flex font-medium text-gray-300 hover:text-green-600 cursor-pointer transition-colors duration-300">
                  <FiLogOut size='28' className="w-7 sm:mx-2 mx-4 inline" />
                  <span>Logout</span>
                </button>
              :
                <Link to='/login' className="flex items-center focus:outline-none mr-3">
                  <span className="hidden md:inline-block text-gray-100">Login</span>
                  {/* <svg className="pl-2 h-2 fill-current text-gray-100" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg> */}
                </Link>
            }
				  </div>


					<div className="block lg:hidden pr-4">
					<button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-100 hover:border-teal-500 appearance-none focus:outline-none">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>
				</div>

			</div>


			{/* <div className="w-full flex-grow md:flex md:items-center md:w-auto hidden mt-2 lg:mt-0 bg-gray-800 z-20" id="nav-content">
				<ul className=" md:flex flex-1 items-center px-4 md:px-0">
					<li className="mr-6 my-2 md:my-0">
            <a href="/" className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900 hover:border-green-400">
                <i className="fas fa-home fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Home</span>
            </a>
          </li>
          <li className="mr-6 my-2 md:my-0">
            <Link to="/Charts" className="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-100 border-b-2 border-gray-900  hover:border-green-400">
              <i className="fa fa-envelope fa-fw mr-3"></i><span className="pb-1 md:pb-0 text-sm">Charts</span>
            </Link>
          </li>
				</ul>
				
			</div> */}
			
		</div>
     {/* Hamburger navigation */}
     {/* <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {
            <div className="hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {
                  user && (   
                    <>
                      <Link to="/exercises" className="flex font-medium text-gray-300 hover:text-green-600 cursor-pointer transition-colors duration-300">
                        <FiActivity size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                        <span>Exercises</span>
                      </Link>  
                      <Link to="/charts" className="flex font-medium text-gray-300 hover:text-green-600 cursor-pointer transition-colors duration-300">
                        <FiBarChart2 size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                        <span>Charts</span>
                      </Link>
                    </>
                  )
                }
                {
                  user
                  ?
                    <>
                      <button onClick={logout} className="flex font-medium text-gray-300 hover:text-green-600 cursor-pointer transition-colors duration-300">
                        <FiLogOut size='28' className="w-7 sm:mx-2 mx-4 inline" />
                        <span>Logout</span>
                      </button>
                      <p className='text-lg justify-end font-bold text-gray-300'>logged in as {user.username}</p>
                    </>
                  :
                    <Link to="/login" className="flex font-medium text-gray-400 hover:text-green-600 cursor-pointer transition-colors duration-300">
                      <FiLogIn size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
                      <span>Login</span>
                    </Link>
                }
              </div>
            </div>
          }
        </Transition> */}
	</nav>


     
    </>
  )
}

export default Navigation
