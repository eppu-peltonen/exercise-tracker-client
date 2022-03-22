import React from 'react'
import {FiActivity, FiHome, FiBarChart2, FiLogIn} from 'react-icons/fi'

import {Link} from "react-router-dom"

const Navigation = () => {
  return(
    <div className="sm:w-1/5 md:1/4 w-full flex-shrink flex-grow-0 p-4">
      <div className="shadow-md sticky top-0 p-4 bg-white rounded-xl w-full">
        <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
          <li className="py-2 hover:bg-gray-300 rounded">
            <Link to="/">
              <FiHome size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
              <span className="hidden sm:inline">Home</span>
            </Link>
          </li>
          <li className="py-2 hover:bg-gray-300 rounded">
            <Link to="/login">
              <FiLogIn size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
              <span className="hidden sm:inline">Login</span>
            </Link>
          </li>
          <li className="py-2 hover:bg-gray-300 rounded">
            <Link to="/exercises">
              <FiActivity size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
              <span className="hidden sm:inline">Exercises</span>
            </Link>
          </li>
          <li className="py-2 hover:bg-gray-300 rounded">        
            <Link to="/charts">
              <FiBarChart2 size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
              <span className="hidden sm:inline">Charts</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Navigation