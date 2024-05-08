import React, {useState,useEffect} from 'react';
import '../App.css';
import Search from './Search';
import ItemsList from './ItemsList';
import NavBar from './NavBar';

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  function handleSearchChange(searchTerm) {
    setSearchTerm(searchTerm);
  }
  const [items, setItems] = useState([])

  useEffect(() => {
    if (searchTerm === "") {
      setItems(items);
    } else {
      const filter = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setItems(filter);
    }
  }, [searchTerm, items]);
  
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
