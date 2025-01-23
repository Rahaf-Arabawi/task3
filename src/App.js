import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/pages/home';
import Error from './components/pages/error'
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Navbar from './components/pages/nav';

const App = () => {
  return (
    <Router>

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" errorElement={<Error />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App

