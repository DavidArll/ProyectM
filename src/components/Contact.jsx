import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Contact extends Component {
    render() { 
        return ( 
        <React.Fragment>
            <section className="page-section bg-primary" id="contact">
                <Container>
                    <Row className="justify-content-center">
                            <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">Tenemos lo que necesitas!</h2>
                            <hr className="divider light my-4" />
                            <p className="text-white-50 mb-4">Somos fabricantes a la medida, con los mejores materiales
                            y la mejor calidad, si necesitas saber mas contactanos, estamos en redes sociales!</p>
                            <Row className="justify-content-center"> 
                                <Col xs md="auto" lg="2">
                                    <Button href="#" variant="info">Facebook</Button>
                                </Col>
                                <Col xs md="auto" lg="2">
                                    <Button href="https://api.whatsapp.com/send?phone=5218118008717" target="_blank" variant="success">WhatsApp</Button>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
         );
    }
}
 
export default Contact;