import React from 'react';
import './App.css';

import Header from './component/Header'
import About from './component/About'
import Services from './component/Services'
import Footer from './component/Footer'
import Portfolio from './component/Portfolio';
import CallToAction from './component/CallToAction';
import CallOut from './component/CallOut';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";






function App() {
  

  return (
    <div>
        <Header />
        <About />
        <Services />
        <CallOut />
        <Portfolio />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default App;


