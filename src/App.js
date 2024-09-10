// import React, {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import './App.css';

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Exciting Films'/>
      <RowPost title='Action & Adventure Films'/>
      <RowPost title='Blockbuster Films'/>
    </div>
  );
}

export default App;
