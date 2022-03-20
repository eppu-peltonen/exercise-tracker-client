import React from 'react'
import {FiActivity, FiHome, FiBarChart2} from 'react-icons/fi'

const SideBar = () => {
  return (
    <div className="sticky top-0 p-4 bg-gray-200 rounded-xl w-full">
      <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
        <li className="py-2 hover:bg-gray-500 rounded">
          <a className="truncate" href="#">
            <FiHome size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
            <span className="hidden sm:inline">Home</span>
          </a>
        </li>
        <li className="py-2 hover:bg-slate-500 rounded">
          <a className="truncate" href="#">
            <FiActivity size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
            <span className="hidden sm:inline">Exercises</span>
          </a>
        </li>
        <li className="py-2 hover:bg-slate-500 rounded">
          <a className="" href="#">
            <FiBarChart2 size='28' className='"w-7 sm:mx-2 mx-4 inline'/>
            <span className="hidden sm:inline">Charts</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar