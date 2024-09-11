// import React, {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import './App.css';
import { originals, action, blockbuster} from './urls'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Exciting Films'/>
      <RowPost url={action} title='Action & Adventure Films'/>
      <RowPost url={blockbuster} title='Blockbuster Films'/>
    </div>
  );
}

export default App;
