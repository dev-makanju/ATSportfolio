import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './views/Home'
import About from './views/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
          </Routes>
      </header>
      <nav>
          <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default App;
