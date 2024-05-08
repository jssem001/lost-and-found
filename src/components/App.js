import React, {useState,useEffect} from 'react';
import '../App.css';
import ItemsList from './ItemsList';
import NavBar from './NavBar';
import Footer from './Footer';

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
      <header>
        <NavBar />
      </header>
      <main>
            <ItemsList items={items} name={items.name} image={items.image} likes={items.likes}/>
      </main>
      <div>
        {/* <Footer /> */}
      </div>  
    </div>
  );
}

export default App;
