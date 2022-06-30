import React from 'react'
import { FiLogOut } from 'react-icons/fi'

const Navigation = ({ user, logout }) => {
  return (
    <nav
      id="header"
      className="bg-gray-700 fixed w-full z-10 top-0 pb-3 shadow"
    >
      <div className="w-full xl:max-w-5xl container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3">
        <div className="w-1/2 pl-2 md:pl-0">
          <div className="text-green-400 text-base md:text-2xl no-underline hover:no-underline font-bold">
            Exercise Tracker
          </div>
        </div>
        <div className="w-1/2 pr-0">
          <div className="flex relative float-right">
            <div className="relative text-sm text-gray-100">
              {user ? (
                <div className="flex flex-row">
                  <div className="mx-8 mt-1 font-bold text-green-400">
                    {`${user.username} logged in`}
                  </div>
                  <button
                    onClick={logout}
                    className="flex font-medium text-gray-300 text-base hover:text-green-600 cursor-pointer transition-colors duration-300"
                  >
                    <FiLogOut size="28" className="w-7 sm:mx-2 mx-4 inline" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
