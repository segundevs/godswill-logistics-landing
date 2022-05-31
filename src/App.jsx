import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import FAQS from './components/FAQS';
import Action from './components/Action';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <React.Fragment>
      <Header />
        <main className="container">
          <Hero />
          <Services />
          <Process />
          <FAQS />
          <Action />
          <Contact />
        </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
