import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
class App extends Component {
  
	render() {
    return (
      <div id="page-top"className="App">
			<Navigation/>
			<Header/>
      </div>
    );
  }
}

export default App;
