import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Navigation extends Component {
      scrollToTop = () => {
    scroll.scrollToTop();
  };

    render() { 
        return ( 
            <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top"
      onClick={this.scrollToTop}
      >Dorzav</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto my-2 my-lg-0">
          <li className="nav-item nav-link">
            <Link
                activeClass="nav-link"
                to="about"
                spy={true}
                smooth={true} 
                offset={-70}
                duration={500}
              >
                Sobre nosotros
              </Link>
          </li>
          <li className="nav-item nav-link">
            <Link
                activeClass="nav-link"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Eventos
              </Link>
          </li>
          <li className="nav-item nav-link">
          <Link
                activeClass="nav-link"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portafolio
              </Link>
          </li>
          <li className="nav-item nav-link">
          <Link
                activeClass="nav-link"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contacto
              </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </React.Fragment>
         );
    }
}
 
export default Navigation;