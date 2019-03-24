import React, { Component } from 'react';
import { Container, Jumbotron, Button, Row, InputGroup, FormControl, Col } from 'react-bootstrap'

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
                            <p>Dejanos tu correo para mantenerte informado sobre nuestros nuevos diseños, tips y eventos en donde presentamos nuestros trabajos</p>
                            <Container>
                                <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <InputGroup>
                                        <FormControl
                                        placeholder="E-mail"
                                        aria-label="E-Mail"
                                        />
                                        <InputGroup.Append>
                                        <Button variant="primary">Registrarse</Button>
                                        </InputGroup.Append>
                                    </InputGroup>
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
