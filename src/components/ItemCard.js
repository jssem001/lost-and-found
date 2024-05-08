import React from 'react'

function ItemCard({item}) {

  return (
    <>
    <div>
        <h5>{item.category}</h5>
        <h3 className="text-xl-font-bold mb-2">{item.name}</h3>
        <img src={item.image} alt="loading" />
        <p>{item.contact}</p>
        <p>{item.location}</p>
        <p>{item.description}</p>
        <h5>Comments {item.comments.length}</h5>
        {
        item.comments.map((comment)=>(
            <div className='p-2 bg-red-700 my-2' key={comment.id}>
            <p>{comment.name}</p>
            <p className='italic'>{comment.text}</p>
            </div>
        ))
        }

    </div>
    <div className="space-x-4 ">
        <button>Edit</button>
        <button>Delete</button>
    </div>
    </>
  )
}

export default ItemCard;
