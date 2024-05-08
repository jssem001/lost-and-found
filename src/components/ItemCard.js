import React from 'react'
import CommentsList from './CommentsList'

function ItemCard({item, setOndelete}) {
  function handleDelete(id) {
    fetch(`http://localhost:8002/items/${id}`, {
            method: 'DELETE',
          })
        .then((res) => res.json())
        .then((res)=>{
            setOndelete(id)
            alert("Item Deleted Successfully!")
        })
  }

  return (
    <>
    <div className="bg-gray-500 ">
      <div className="text-start px-6">
        <h3 className=""> <span className="font-semibold text-3xl text-black" >Name:</span> {item.name}</h3>
        <p><span className="font-semibold text-3xl text-black" >Contact:</span> {item.contact}</p>
        <p><span className="font-semibold text-3xl text-black" >Location:</span> {item.location}</p>
        <p> <span className="font-semibold text-3xl text-black" >Description:</span> <span>{item.description}</span> </p>
        <img src={item.image} alt="loading..." />
        <div className="flex justify-between px-4">
          <button className='bg-gray-700 text-green-700 rounded px-2'>Edit</button>
          <button onClick={()=> handleDelete(item.id)} type="button" className='bg-gray-700 text-red-700 rounded px-2'>Delete</button>
        </div>
        <div className='p-4 text-start text-black'>
          <h5 className=" p-2 text-gray-300 italic text-xl text-end"> {item.comments.length} comments </h5>
        </div>
        <div className=" p-2 text-start">
          {
          item.comments && item.comments.map((comment)=>(
              <div className='p-2 bg-gray-400 my-2 rounded ' key={comment.id}>
                {/* <p> <span className="font-semibold text-2xl" >{comment.name};</span> <span className='italic text-xl '> {comment.text} </span> </p> */}
                <CommentsList />

              </div>
          ))
          }
        </div>
      </div>
    </div>

    </>
  )
}

export default ItemCard;
