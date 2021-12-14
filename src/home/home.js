import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../main-page/main-page.css'

const Home = () => {
    return (
        <>
            <Row className='g-0 fullHeight'>
                <Col>
                    <p className='title'>
                        <span>Poder</span>
                        <span style={{ fontWeight: '100' }}>al</span>
                        <span>barrio</span>
                    </p>
                    <p className='subtitle'>lorem ipsum obun matiner slogan text</p>
                </Col>
            </Row>
            <Row className='g-0 standardDiv'>
                <Col>
                    <p className='title'>
                        <span>Poder</span>
                        <span style={{ fontWeight: '100' }}>al</span>
                        <span>barrio</span>
                    </p>
                    <p className='subtitle'>lorem ipsum obun matiner slogan text</p>
                </Col>
            </Row>
        </>
    );
}

export default Home;