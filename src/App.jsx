import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import FAQS from './components/FAQS';
import Action from './components/Action';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Policy from './components/Policy';

function App() {

  return (
    <React.Fragment>
      <Header />
      <Routes>
      <Route path="/" element={<>
      <main className="container">  
          <Hero />
          <Services />
          <Process />
          <FAQS />
          <Action />
          <Contact />
        </main>
      </>}/>
      <Route path="/policy" element={<Policy />}/>
      </Routes>
      <Footer />
    </React.Fragment>
  )
}

export default App
