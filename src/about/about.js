import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Banner from '../components/banner';
import ContinuousText from '../components/continuousText';
import { ImageMatrix } from '../components/image';
import '../main-page/main-page.css'

const About = () => {
    return (
        <>
            <Row className='g-0 fullHeight'
            // Uncomment next line to add image:
            // style={{ backgroundImage: 'url(/assets/ejemplo1.jpg)' }}
            >
                <Col className='continuousSubtitle'>
                    <ContinuousText
                        text='/  Urbanismo  /  Pedagogía  /  Diseño  /  Derecho  '
                        direction='reverse'
                    />
                </Col>
                <Col className='continuousTitle'>
                    <ContinuousText
                        text='/ Investigación / Consultoría '
                    />
                </Col>
            </Row>

            <ImageMatrix
                title='Equipo de trabajo'
                subtitle='Estas son las personas detrás del desarrollo de los proyectos y 
                publicaciones.'
                size={6}
                frames={10}
                imageType='equipo'
            />

            <Row className='g-0 standardDiv'>
                <Col>
                    <Banner
                        title="Alianzas"
                        subtitle="Estos son los aliados que nos han apoyado a lo largo o en 
                        algún momento de nuestro camino."
                        text="División de Extensión de la Universidad Nacional de Colombia, 
                        Junta de Acción Comunal del barrio Luis Carlos Galán, Biblioteca 
                        Comunitaria Pozo del Saber, Fundación Aspirantes.org, MasterPeace."
                        inverted={true}
                        innerMatrix={true}
                    // Uncomment next line to add image:
                    // url="/assets/ejemplo2.jpg"
                    />
                </Col>
            </Row>
        </>
    );
}

export default About;