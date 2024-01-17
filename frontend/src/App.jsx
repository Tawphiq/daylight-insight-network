import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-[url(./assets/Welcome_01.jpg)] bg-cover bg-left h-screen bg-no-repeat'>
      <div className='lg:w-full h-full bg-sky-500/20 backdrop-brightness-75 grid'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </div>
    </div>
  );
};

export default App;
