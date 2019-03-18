import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Navigation extends Component {
    scrollToTop = () => {
    scroll.scrollToTop();
  };
  state = {
    background: '#44351866',
    color: 'white'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 500) {
      this.setState({background: 'white', color: 'black'})
    } else {
      this.setState({background: '#44351866', color: 'white'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
    render() { 
        return ( 
            <React.Fragment>
              <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav"
                style={{backgroundColor: this.state.background }}
                >
                <div className="container">
                  <a className="navbar-brand js-scroll-trigger" href="#page-top"
                  onClick={this.scrollToTop}
                  style={{color: this.state.color}}
                  >Dorzav</a>
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto my-2 my-lg-0"
                          style={{color: this.state.color}}
                    >
                      <li className="nav-item nav-link">
                        <Link
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
                            to="catalog"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                          >
                            Nuestros trabajos
                          </Link>
                      </li>
                      <li className="nav-item nav-link">
                        <Link 
                          to="contact"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                        Contactanos
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