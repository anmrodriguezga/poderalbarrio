import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ContinuousText from '../components/continuousText';
import '../main-page/main-page.css'

const About = () => {
    return (
        <>
            <Row className='g-0 fullHeight'
            // Uncomment next line to add image:
            // style={{ backgroundImage: 'url(/assets/ejemplo1.jpg)' }}
            >
                <Col className='continuousSubtitle'>
                    <ContinuousText text='/ Urbanismo / Pedagogía / Diseño / Derecho '/>
                </Col>
                <Col className='continuousTitle'>
                    <ContinuousText text='/ Investigación / Consultoría '/>
                </Col>
            </Row>
        </>
    );
}

export default About;