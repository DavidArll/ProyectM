import React, { Component } from 'react';

class About extends Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
            <section className="page-section bg-primary" id="about">
                <div className="container">
                    <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">Diseño y Fabricación de Salas</h2>
                            <hr className="divider light my-4" />
                            <p className="text-white-50 mb-4">Somos una empresa 100% Regiomontana enfocada en la fabricación y diseño de Salas.
Nuestros productos son hechos con Calidad</p>
                            <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
         );
    }
}
 
export default About;