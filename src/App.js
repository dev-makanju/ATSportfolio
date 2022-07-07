import * as React from "react";
import { Routes, Route,} from "react-router-dom";
import './App.css';
import Home from './views/Home'
import About from './views/About'
import Article from './views/Articles'
import Contact from './views/Contact'
import Service from './views/Service'
import Portfolio from "./views/Portfolio";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/article" element={<Article/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Service/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}

export default App;
