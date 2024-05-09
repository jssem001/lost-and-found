import React,{useState} from 'react';
import axios from 'axios';

function ItemsForm({setItems}) {
  const [formdata, setFormdata] =useState(
    {
        image:"",
        name:"",
        contact:"",
        description:"",
        location:""
    }
)
    function handleadd(e){
        setFormdata({
           ...formdata,
            [e.target.name]:e.target.value
        })
    }
    function handlesubmit(e){
      
      
      console.log(formdata)
       axios.post("https://seek-n-secure.onrender.com/items",formdata)
       .then(res=>{return console.log("Successfully posted data to server",setItems(res));})
       .catch(err=>console.log("error posting data",err))
    }

    return(



<form onSubmit={(e)=>handlesubmit(e)} class="max-w-md mx-auto">
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="image" value={formdata.image} onChange={handleadd} class="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
       placeholder=" " required />
      <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Image Url</label>
  </div>

  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="name" value={formdata.name} onChange={handleadd} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      placeholder=" " required />
      <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >Item Name</label>
  </div>

  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="location" value={formdata.location} onChange={handleadd} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
      placeholder=" " required />
      <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        Where last did you have it/Where have you found it</label>
  </div>
 

  <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="contact" value={formdata.contact} onChange={handleadd} class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" " required />
        <label  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Phone number (123-456-7890)</label>
    </div>
  <div>
  <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
  <textarea id="message" name="description" value={formdata.description} onChange={handleadd} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
   placeholder="Briefly describe the item ..."></textarea>
  </div>



  <button type="submit"  class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >Submit</button>
</form>


    )
}
  

 
export default ItemsForm;
