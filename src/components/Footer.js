import React from 'react'
import logo from '../Black & White Minimalist Business Logo.png'

function Footer(){
    
return (
    <footer class="bg-white dark:bg-gray-400 mt-8">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="grid grid-cols-2 gap-8 sm:gap-8 sm:grid-cols-4">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-700">JOSHUA</h2>
                  <ul class="text-gray-500 dark:text-white font-normal">
                      <li class="mb-4">
                          <h2>+254717602334</h2>
                      </li>
                      <li>
                        <h2>ssemwanga18@gmail.com</h2>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-700">SAMSON</h2>
                  <ul class="text-gray-500 dark:text-white font-normal">
                      <li class="mb-4">
                          <h2>+254790509413</h2>
                      </li>
                      <li>
                          <h2>rasspartah@gmail.com</h2>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-700">SHADRACK</h2>
                  <ul class="text-gray-500 dark:text-white font-normal">
                      <li class="mb-4">
                          <h2>+254723486218</h2>
                      </li>
                      <li>
                          <h2>skmutai6@gmail.com</h2>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-700">JENE</h2>
                  <ul class="text-gray-500 dark:text-white font-normal">
                      <li class="mb-4">
                          <h2>+254743218042</h2>
                      </li>
                      <li>
                          <h2>wambuiwachuka94@gmail.com</h2>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
         <div class="mb-6 md:mb-0">
              <a href="#top" class="flex items-center">
                  <img src={logo} class="size-32" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
              </a>
         </div>
         <span class="text-sm text-gray-500 sm:text-center dark:text-gray-700">© 2024 Seek N Secure™. All Rights Reserved.
         </span>
      </div>
    </div>
</footer>
)


}

export default Footer