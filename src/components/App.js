import React, {useState,useEffect} from 'react';
import logo from '../logo.svg';
import '../App.css';
import ToysTest from './ToysTest';

function App() {
  const [toys, setToys] = useState("")
  
  useEffect(() =>{
    fetch("http://localhost:8002/toys")
      .then(r => r.json())
      .then(data => setToys(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Team 9 welcome to your Phase 2 Project</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Dummy server info below</p>
        {toys.map(toy => 
            <ToysTest toys={toys} name={toy.name} image={toy.image} likes={toy.likes}/>
        )} 
      </header>
      
    </div>
  );
}

export default App;
