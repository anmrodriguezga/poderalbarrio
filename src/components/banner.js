import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './banner.css'

const Banner = (props) => {
    if (props.inverted) {
        return (
            <Container>
                <Row className='banner'>
                    <Col xs={10} md={5} className='banner-image'
                        style={{ backgroundImage: 'url(' + props.url + ')' }}
                    >
                        {/* xs=12 md=8 */}
                    </Col>
                    <Col xs={9} md={6} className='banner-text'>
                        <Container>
                            <div className='banner-text-title'>{props.title}</div>
                            <p><b>{props.subtitle}</b></p>
                            <p>{props.text}</p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return (
            <Container>
                <Row className='banner'>
                    <Col xs={9} md={5} className='banner-text-inverted'>
                        <Container>
                            <div className='banner-text-title-inverted'>{props.title}</div>
                            <p><b>{props.subtitle}</b></p>
                            <p>{props.text}</p>
                            <Button className='contact-button'>Contáctanos</Button>
                        </Container>
                    </Col>
                    <Col xs={10} md={5} className='banner-image'
                        style={{ backgroundImage: 'url(' + props.url + ')' }}
                    >
                        {/* xs=12 md=8 */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Banner;