import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";



function ItemCard() {

  const [temi, setTemi] = useState({});
  const params = useParams();
  const temiId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:8002/items/${temiId}`)
    .then(r => r.json())
    .then(data => setTemi(data))
    .catch(error => console.error(error));
  }, [temiId]);

  if(!temi.name){
    return <h1>Loading...</h1>;
  };


  function handleDelete(e) {
    e.preventDefault()
    fetch(`http://localhost:8002/items/${temiId}`, {
            method: 'DELETE',
          })
          .then(alert('Delete successful'))
  }

  return (
    <>
      <div className="bg-white mt-5">
          <div className="text-start px-6">
            <img class="rounded-lg mx-auto max-w-lg mb-4" src={temi.image} alt="loading..." />
            <h3> <span className="font-semibold text-xl text-black" >Item:</span> {temi.name}</h3>
            <p><span className="font-semibold text-xl text-black" >Contact:</span> {temi.contact}</p>
            <p><span className="font-semibold text-xl text-black" >Location:</span> {temi.location}</p>
            <p> <span className="font-semibold text-xl text-black" >Description:</span> <span>{temi.description}</span> </p>
            <div className="flex justify-between px-4">
              <button className='bg-gray-700 text-green-700 rounded px-2'>Edit</button>
              <button onClick={handleDelete} type="button" className='bg-red-700 text-white rounded px-2'>Delete</button>
            </div> 
        </div>
      </div>
          
      

    </>
  )
}

export default ItemCard;
