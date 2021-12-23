import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Banner from '../components/banner';
import { LinkableImage } from '../components/image';
import '../main-page/main-page.css'

const Home = () => {
    return (
        <>
            <Row className='g-0 fullHeight' 
                // Uncomment next line to add image:
                // style={{ backgroundImage: 'url(/assets/ejemplo1.jpg)' }}
            >
                <Col>
                    <p className='title'>
                        <span>Poder</span>
                        <span style={{ fontWeight: '100' }}>al</span>
                        <span>barrio</span>
                    </p>
                    <p className='subtitle'>por la participación y el fortalecimiento desde los barrios.</p>
                </Col>
            </Row>
            <Row className='g-0 standardDiv'>
                <Col>
                    <Banner
                        title="Bienvenido(a)"
                        subtitle="Poder al Barrio es una organización sin ánimo de lucro 
                        conformada desde el 2020."
                        text="Nuestro objetivo es velar por el fortalecimiento de los barrios 
                        y de las personas que habitan en estos desde un enfoque interdisciplinar 
                        que permita la generación de proyectos y soluciones integrales."
                        inverted={true}
                        // Uncomment next line to add image:
                        // url="/assets/ejemplo2.jpg"
                    />
                </Col>
            </Row>
            <Row className='g-0 standardDiv'>
                <Col xs={12} md={6}>
                    <LinkableImage 
                        page='PROYECTOS' 
                        // Uncomment next line to add image:
                        url='/assets/ejemplo1.jpg' 
                    />
                </Col>
                <Col xs={12} md={6}>
                    <LinkableImage 
                        page='PUBLICACIONES' 
                        // Uncomment next line to add image:
                        url='/assets/ejemplo2.jpg' 
                    />
                </Col>
            </Row>
            <Row className='g-0 standardDiv'>
                <Col>
                    <Banner 
                        title="¿Tienes alguna duda, comentario o propuesta?" 
                        inverted={false} 
                        // Uncomment next line to add image:
                        // url="/assets/ejemplo2.jpg"
                    />
                </Col>
            </Row>
        </>
    );
}

export default Home;