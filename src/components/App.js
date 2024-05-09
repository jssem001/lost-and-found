import React, {useState, useEffect} from 'react';
import '../App.css';
import Search from './Search';
import ItemsList from './ItemsList';
import NavBar from './NavBar';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] =useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  function handleSearchChange(searchTerm) {
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchTerm, items]);
  
  useEffect(() =>{
    fetch("http://localhost:8002/items")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setFilteredItems(data);
      })
  }, []);

  return (
    <div className="App ">
      <header>
        <NavBar />
      </header>
      <main>
        <Search onSearchChange={handleSearchChange} />
        <ItemsList items={filteredItems} />
      </main>
      <div>
        {/* <Footer /> */}
      </div>  
    </div>
  );
}

export default App;
