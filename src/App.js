import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import './components/css/creative.css';
import './components/css/vendor/fontawesome-free/css/all.min.css';
import './components/css/vendor/magnific-popup/magnific-popup.css'
class App extends Component {
  
	render() {
    return (
      <div id="page-top"className="App">
        <Navigation/>
        <Header/>
        <About/>
        <Services/>
      </div>
    );
  }
}

export default App;