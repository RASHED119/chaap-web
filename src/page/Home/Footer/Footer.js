import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <Container>
                    <Row>
                        <Col sm={ 3 }>
                        <h5>About</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Footer;