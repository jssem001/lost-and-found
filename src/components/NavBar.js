import React from 'react'
import logo from '../Black & White Minimalist Business Logo.png'
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-blue-400">
        
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
              <img src={logo} class="size-24" alt="seek and secure Logo" />
          
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white bg-white border-gray-200 dark:bg-blue-400">
              <NavLink to='/'>
              <li class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Lost Items
              </li>
              </NavLink>
              <NavLink to='/AddItem'>
              <li class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-reen-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Add Item
              </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar;
