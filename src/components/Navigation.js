import React from 'react'
import {FiActivity, FiLogOut} from 'react-icons/fi'
import {Link} from "react-router-dom"

const Navigation = ({user, logout}) => {


  return (
  <nav id="header" className="bg-gray-800 fixed w-full z-10 top-0 pb-3 shadow">
		<div className="w-full xl:max-w-5xl container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3">
				
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
				</div>
			</div>		
		</div>
	</nav>
  )
}

export default Navigation
