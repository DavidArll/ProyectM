import React, { Component } from 'react';

class Header extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <header class="masthead">
                    <div class="container h-100">
                        <div class="row h-100">
                                <div class="col-lg-10 align-self-end">
                                    <h1 class="text-uppercase text-white font-weight-bold">DORZAV Desing</h1>
                                    <hr class="divider my-4" />
                                    <div class="col-lg-8 align-self-baseline">
                                        <p class="text-white-75 font-weight-light mb-5">Recamaras y mas..</p>
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
