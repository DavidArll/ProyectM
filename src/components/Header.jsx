import React, { Component } from 'react';

class Header extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100">
                                <div className="col-lg-10 align-self-end">
                                    <h1 className="text-uppercase text-white font-weight-bold">DORZAV Desing</h1>
                                    <hr className="divider my-4" />
                                    <div className="col-lg-8 align-self-baseline">
                                        <p className="text-white-75 font-weight-light mb-5">Recamaras y mas..</p>
                                        {/* <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> */}
                                    </div>
                                </div>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}
export default Header;
