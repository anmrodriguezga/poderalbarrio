import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Banner from '../components/banner';
import { LinkableImage } from '../components/image';
import '../main-page/main-page.css'

const Home = () => {
    return (
        <>
            <Row className='g-0 fullHeight' 
                style={{backgroundColor: '#E5E5E5'}}
                // Uncomment next line to add image:
                // style={{ backgroundImage: 'url(/assets/ejemplo1.jpg)' }}
            >
                <Col>
                    <p>
                        <span className='title-bold'>Poder</span>
                        <span className='title-light'>al</span>
                        <span className='title-bold'>barrio</span>
                    </p>
                    <p className='subtitle'>por la participación y el fortalecimiento desde los barrios.</p>
                </Col>
            </Row>

            <Row className='g-0 standardDiv'>
                <Col>
                    <Banner
                        title="Bienvenido(a)"
                        subtitle="Nuestro objetivo es velar por el fortalecimiento de los barrios 
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
                        url='/poderalbarrio/projects'
                        // Uncomment next line to add image:
                        image='/assets/ejemplo1.jpg' 
                    />
                </Col>
                <Col xs={12} md={6}>
                    <LinkableImage 
                        page='PUBLICACIONES'
                        url='/poderalbarrio/publications' 
                        // Uncomment next line to add image:
                        image='/assets/ejemplo2.jpg' 
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