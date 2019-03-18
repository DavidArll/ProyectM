import React, { Component } from 'react';
import { Container, Jumbotron, Button, Row, Col } from 'react-bootstrap'

class Header extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <header className="masthead">
                        <Jumbotron className="home-page">
                            <h1>Elegancia, Confort y Calidad</h1>
                            <p>
                                Deseamos ser parte de tu hogar, con diseños, de alta calidad
                                y a la medida de tus necesidades.
                            </p>
                            <p>Comunicate con nosotros, estaremos encantados de ayudarte</p>
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col xs md="auto" lg="2">
                                        <Button href="#" variant="info">Facebook</Button>
                                    </Col>
                                    <Col xs md="auto" lg="2">
                                        <Button href="https://api.whatsapp.com/send?phone=5218118008717" target="_blank" variant="success">WhatsApp</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>;
                </header>
            </React.Fragment>
        );
    }
}
export default Header;
