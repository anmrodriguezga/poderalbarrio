import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import './banner.css'
import { ImageMatrix } from './image';

const Banner = (props) => {
    var background = props.innerMatrix ? '#eae8ee' : '#e1e1e1';
    function InnerMatrix(innerMatrix) {
        if (innerMatrix) {
            return (
                <ImageMatrix 
                    size={4}
                    frames={6}
                    imageType='aliado'
                    opacity={1}
                    linkable={true}
                    source='sites'
                />
            );
        }
    }

    if (props.inverted) {
        return (
            <Container>
                <Row className='banner'>
                    <Col xs={10} sm={9} md={6} lg={5} xl={4} 
                        className='banner-image'
                        style={{ backgroundImage: 'url(' + props.url + ')', backgroundColor: background}}
                    >
                        {InnerMatrix(props.innerMatrix)}
                    </Col>
                    <Col xs={9} sm={8} md={6} lg={7} xl={5} className='banner-text d-flex flex-column align-self-end'>
                        <Container>
                            <div className='banner-text-title'>{props.title}</div>
                            <p className='banner-text-subtitle'>{props.subtitle}</p>
                            <p className='banner-text-light'>{props.text}</p>
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
                            <div className='banner-text-title-inverted pink-banner'>{props.title}</div>
                            <p className='banner-text-subtitle'>{props.subtitle}</p>
                            <p>{props.text}</p>
                            <Button className='contact-button'>Contáctanos</Button>
                        </Container>
                    </Col>
                    <Col xs={10} md={5} className='banner-image'
                        style={{ backgroundImage: 'url(' + props.url + ')', backgroundColor: background }}
                    >
                        {/* xs=12 md=8 */}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Banner;