import React, {useState,useEffect} from 'react';
import '../App.css';
import ToysTest from './ToysTest';

function App() {
  const [toys, setToys] = useState([])
  
  useEffect(() =>{
    fetch("http://localhost:8002/toys")
      .then(r => r.json())
      .then(data => setToys(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="App ">
      <header className="App-header">

        <p>Welcome to your <span className='text-red-900'>lost</span> and <span className='text-green-900'>found</span> items page.</p>

        {toys.map(toy =>
            <ToysTest toys={toys} name={toy.name} image={toy.image} likes={toy.likes}/>
         )}
      </header>
      
    </div>
  );
}

export default App;
