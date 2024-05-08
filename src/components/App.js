import React, {useState,useEffect} from 'react';
import '../App.css';
import ItemsForm from './ItemsForm';
import ItemsList from './ItemsList';

function App() {
  const [items, setItems] = useState([])
  
  useEffect(() =>{
    fetch("http://localhost:8002/items")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="App ">
      <header className="App-header pt-4">

        <p>Welcome to your <span className='text-red-900'>lost</span> and <span className='text-green-900'>found</span> items page.</p>
      <ItemsForm />

        {items.map(item =>
            <ItemsList items={items} name={item.name} image={item.image} likes={item.likes}/>
         )}

      </header>
      {/* info */}
    </div>
  );
}

export default App;
