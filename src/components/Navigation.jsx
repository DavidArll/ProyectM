import React, { Component } from 'react'
class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <nav id="navbar-main" className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">      
                    </button>
                    <a className="navbar-brand topnav" href="#">Hbr Web Design</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="#about">ABOUT ME</a></li>
                            <li><a href="#portfolio">PORTFOLIO</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
         );
    }
}
 
export default Navigation;