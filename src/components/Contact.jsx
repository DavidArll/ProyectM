import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Contact extends Component {
    render() { 
        return ( 
        <React.Fragment>
            <section className="page-section contact-page" id="contact">
                <Container>
                    <Row className="justify-content-center">
                        <Col className="justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="text-white mt-0">Tenemos lo que necesitas!</h2>
                            <hr className="divider light my-4" />
                            <p className="text-white-50 mb-4">Somos fabricantes a la medida, con los mejores materiales
                            y la mejor calidad, si necesitas saber mas contáctanos, estamos en redes sociales!</p>
                            </div>
                        </Col>
                        <Col className="contact-buttons">
                            <Row className="justify-content-center">
                                <Col xs lg="12">
                                <h2 className="text-white mt-0">Contactanos!</h2>
                                </Col>
                                <Col lg="4">
                                    <Button href="#" variant="info">Facebook</Button>
                                </Col>
                                <Col lg="4">
                                    <Button href="https://api.whatsapp.com/send?phone=5218118008717" target="_blank" variant="success">WhatsApp</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
         );
    }
}
 
export default Contact;