import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';
import Navigation from './components/Navigation';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

class App extends Component {
  
	render() {
		const styles = {
			fontFamily: 'Menlo-Regular, Menlo, monospace',
			fontSize: 14,
			lineHeight: '10px',
			color: 'white',
			display: 'flex', alignItems: 'center', justifyContent: 'center'
}
    return (
      <div className="App">
            <Parallax horizontal ref="parallax" pages={3}>

<Parallax.Layer offset={0} speed={1} style={{ background-image: url("./images/bg1.jpg") }} />
<Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
<Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

<Parallax.Layer
		offset={0}
		speed={0.5}
		style={styles}
		onClick={() => this.refs.parallax.scrollTo(1)}>
		Click!
</Parallax.Layer>

<Parallax.Layer
		offset={1}
		speed={-0.1}
		style={styles}
		onClick={() => this.refs.parallax.scrollTo(2)}>
		Another page ...
</Parallax.Layer>

<Parallax.Layer
		offset={2}
		speed={0.5}
		style={styles}
		onClick={() => this.refs.parallax.scrollTo(0)}>
		The end.
</Parallax.Layer>

</Parallax>
      </div>
    );
  }
}

export default App;