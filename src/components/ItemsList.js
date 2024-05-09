import React from 'react';
import ItemCard from './ItemCard';
//import logo from '../images/seek-n-secure-logo.png'
import {Link} from 'react-router-dom'

function ItemsList({items}) {
  items.map(item => (
    <ItemCard key={item.id} item={item} name={item.name} image={item.image} likes={item.likes} />
  ))
  return (
    <>
      <section class="bg-white dark:bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">Seek N Secure</h2>
              <p class="font-light text-gray-500 sm:text-xl dark:text-black">Welcome to seek and secure! An online registry where your <span class='font-medium text-red-900'>lost</span> items can be <span class='font-medium text-green-900'>found.</span></p>
          </div> 
          <div class="grid gap-8 lg:grid-cols-2"></div>  
        </div>
      </section>
      
      <section class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map( item => ( 
          
          <div class="max-w-sm bg-white border border-gray-700 rounded-lg shadow dark:bg-white dark:border-black grid grid-cols-1">

                <img class="rounded-t-lg size-50" src={item.image} alt="loading..." />
            
            <div class="p-5">
                
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{item.name}</h5>
                
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">finder's contact: {item.contact}</p>
                <Link to={`/ItemCard/${item.id}`}>
                  <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      View more
                      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </button>
                </Link>
            </div>
          </div> ))}
      </section>
          
        {/* <div class= "grid grid-cols-4 gap-4">
         {items.map(item => (
          <ItemCard key={item.id} item={item} name={item.name} image={item.image} likes={item.likes} />
        ))} 
        </div> */}

        
        {/* <ItemsForm /> */}
      
    </>
  );
}

export default ItemsList;
