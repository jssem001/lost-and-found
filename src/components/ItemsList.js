import React from 'react';
import ItemCard from './ItemCard';

function ItemsList({ items }) {
  return (
    <div className="">
      <h2>List of Items</h2>
      {items.map(item => (
        <ItemCard key={item.id} item={item} name={item.name} image={item.image} likes={item.likes} />
      ))}
    </div>
  );
}

export default ItemsList;
