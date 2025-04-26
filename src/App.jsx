import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';



function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
}

export default App;
