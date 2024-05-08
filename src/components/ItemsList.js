import React from 'react';
import ItemsForm from './ItemsForm';
import ItemCard from './ItemCard';

function ItemsList({ items }) {
  return (
    <div className="ItemsList">
      <h2>List of Items</h2>
      {items.map(item => (
        <ItemCard key={item.id} item={item} name={item.name} image={item.image} likes={item.likes} />
      ))}
      <ItemsForm />
    </div>
  );
}

export default ItemsList;
