import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import CV from './components/cv';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer'


function App() {

  const backgroundImage ="./src/pics/bg.jpg"

  return (
    <div className='' style={{
      background: 'linear-gradient(90deg, rgba(55,47,70,1) 0%, rgba(0,0,0,1) 100%, rgba(0,212,255,1) 100%)',
    }}>
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/cv' element={<CV />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
