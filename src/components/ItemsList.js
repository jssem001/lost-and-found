import React from 'react';
import ItemsForm from './ItemsForm';
import ItemCard from './ItemCard';

function ItemsList({items}) {
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
      
        <h2>List of Items</h2>
        <div>
         {items.map(item => (
          <ItemCard key={item.id} item={item} name={item.name} image={item.image} likes={item.likes} />
        ))} 
        </div>

        
        {/* <ItemsForm /> */}
      
    </>
  );
}

export default ItemsList;
