import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import photo4 from '../../../images/chap4.jpg';
import './Footer.css';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer p-5">
                <Container>
                    <Row>
                        <Col sm={3}>
                            <h5>ADDRESS</h5>
                            <p> 19, Gausul Super Market, Nilk Road, Dhaka 1205</p>

                        </Col>
                        <Col sm={3}>
                            <h5>CONTACT US</h5>
                            <p>Telephone : <a href="/home" className="text-white text-decoration-none"> +88 019 82 552 429</a> </p>
                            <p>Telephone : <a href="/home" className="text-white text-decoration-none">+88 015 81 402 441</a> </p>
                            <p> Email:<a href="/home" className="text-white text-decoration-none">info@chaapcommunication.bd</a></p>

                        </Col>
                        <Col sm={3}>
                            <h5>OUR BUSINESSES</h5>
                            <p>Business Concerns</p>
                            <p>Future Expansions</p>
                            <p>Overseas Business</p>
                        </Col>
                        <Col sm={3}>
                            <img src={photo4} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="footerbottom p-2" >
                <Container>
                    <p className="text-center mt-3">Copyright <FaCopyright/> chaapcommunicationbd</p>
                </Container>

            </div>
        </React.Fragment>
    );
};

export default Footer;