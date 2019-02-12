import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';
import Navigation from './components/Navigation';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

class App extends Component {
  
	state = {
		termino : '',
		imagenes : [],
		pagina: ''
	}
	scroll = () => {
		const elemento = document.querySelector('.jumbotron');
		elemento.scrollIntoView('smooth', 'start');
	}
	paginaAnterior = () => {
		 //? Leer el state de la pagina actual
		 let pagina = this.state.pagina;
		 //? Leer si la pagina es 1, ya no ir hacia atrás
		 if(pagina === 1) return null;
		 //? Sumar uno a la pagina actual
		 pagina--;
		 //? agregar el cambio al state
		 this.setState({
			 pagina
		 }, () => {
			 this.consultarApi();
			 this.scroll();
		 });
		}

 	paginaSiguiente = () => {
		 //? Leer el state de la pagina actual
		let pagina = this.state.pagina;
		//? Sumar uno a la pagina actual
		pagina++;
		//? agregar el cambio al state
		this.setState({
			pagina
		}, () => {
			this.consultarApi();
			this.scroll();
		});
 	}

	consultarApi = () => {
		const termino = this.state.termino;
		const pagina = this.state.pagina;
		const url = `https://pixabay.com/api/?key=11562765-c560d524c81146724cd6a0f92&q=${termino}&per_page=30&page=${pagina}`;
		fetch(url) 
			.then(respuesta => respuesta.json() )
			.then(resultado => this.setState({ imagenes : resultado.hits }) )
	}

	datosBusqueda = (termino) => {
		this.setState({
			termino: termino,
			pagina: 1
		}, () => {
			this.consultarApi();
		})
	}

	render() {
    return (
      <div className="App container">
			<Navigation/>
				<div className="jumbotron">
					<p className="lead text-center">Buscador de Imágenes</p>

					<Buscador 
						datosBusqueda={this.datosBusqueda}
					/>
				</div>
				<div className="row justify-content-center">
					<Resultado 
							imagenes={this.state.imagenes}
							paginaAnterior={this.paginaAnterior}
							paginaSiguiente={this.paginaSiguiente}
					/>
				</div>
      </div>
    );
  }
}

export default App;