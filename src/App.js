import React from 'react';
import './App.css';

import Header from './component/Header'
import About from './component/About'
import Services from './component/Services'
import Footer from './component/Footer'
import Portfolio from './component/Portfolio';
import CallToAction from './component/CallToAction';
import CallOut from './component/CallOut';
import myData from './myData'






function App() {
  {/*const mainComponents = myData.map(yayo => <MainContent key={MainContent.id} question={yayo.question} punchLine={yayo.punchLine} />)*/}


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


