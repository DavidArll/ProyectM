import React, { Component } from 'react';
import { Container, Jumbotron, Button, Row, Col } from 'react-bootstrap'

class Header extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <header className="masthead">
                        <Jumbotron className="home-page">
                            <h1>Elegancia y comodidad en tu hogar</h1>
                            <p>
                                Deseamos ser parte de tu hogar, con diseños, de alta calidad
                                y a la medida de tus necesidades.
                            </p>
                            <p>Comunicate con nosotros, estaremos encantados de ayudarte</p>
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col xs md="auto" lg="2">
                                        <Button href="#" variant="primary">Facebook</Button>
                                    </Col>
                                    <Col xs md="auto" lg="2">
                                        <Button href="https://api.whatsapp.com/send?phone=34123456789" variant="success">WhatsApp</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>;
                    {/* <div className="container h-100">
                        <div className="row h-100">
                                <div className="col-lg-10 align-self-end">
                                    <h1 className="text-uppercase text-white font-weight-bold">DORZAV Design</h1>
                                    <hr className="divider my-4" />
                                    <div className="col-lg-8 align-self-baseline">
                                        <p className="text-white-75 font-weight-light mb-5">Recamaras y mas..</p>
                                        {/* <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> 
                                    </div>
                                </div>
                        </div>
                    </div> */}
                </header>
            </React.Fragment>
        );
    }
}
export default Header;
