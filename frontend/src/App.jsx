// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Services from './components/Services';
import Contact from './components/Contact';
import videobg from './assets/daylight-bg3.mp4'
import EventDetail from './components/EventDetail';

const App = () => {
  return (
    <>
      <video
        className='absolute object-cover w-full min-h-screen -z-10 '
        src={videobg} autoPlay loop muted />
      <div className='backdrop-brightness-50g bg-amber-300/20g pt-5 min-h-screen'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events/:id" element={<EventDetail />} />
          </Routes>
          <Services />
          <About />
          <Events />
        </Router>
      </div>
    </>
  );
};

export default App;
