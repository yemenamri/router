import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {useState} from 'react'
import Navbar from "./components/Navbar";

import Movies from "./components/Movies";
import Film from "./components/film";
function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar   />
        

<Route path='/Movies' exact  component={Movies}/>
<Route path='/Movies/:ID' component={Film}/>

        
      </Router>
    </div>
  );
}

export default App;