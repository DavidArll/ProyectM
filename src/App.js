import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Catalog from './components/Catalog';
import './components/css/creative.css';
import './components/css/main.css';
import './components/css/vendor/fontawesome-free/css/all.min.css';
//import './components/css/vendor/magnific-popup/magnific-popup.css'
class App extends Component {
  
	render() {
    return (
      <div id="page-top"className="App">
        <Navigation/>
        <Header/>
        <Services/>
        <About/>
        <Catalog/>
        <Contact/>
      </div>
    );
  }
}

export default App;