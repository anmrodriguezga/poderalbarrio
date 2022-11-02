import React, { useState } from 'react';
import { Row, Col, Image, Container, Button, Form } from 'react-bootstrap';
import { TextDropdown, AppDatePicker } from '../components/dropdown';
import { projects } from '../structure/projects.json'
import '../main-page/main-page.css'
import { CustomModal } from '../components/modal';

const Projects = () => {

    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);

    const toggleShow = (index) => {
        setShow(p => !p);
        setId(index);
    }

    const projListL = projects.map((value, index) => {
        if (index === 0 || index % 2 !== 0) {
            return (
                <Image
                    key={index}
                    className='card-left'
                    alt='img'
                    src={value.image}
                    onClick={() => toggleShow(index)}
                    style={{ cursor: 'pointer' }} />
            );
        }
        return null;
    });

    const projListR = projects.map((value, index) => {
        if (index !== 0 && index % 2 === 0) {
            return (
                <Image
                    key={index}
                    className='card-right'
                    alt='img'
                    src={value.image}
                    onClick={() => toggleShow(index)}
                    style={{ cursor: 'pointer' }} />
            );
        }
        return null;
    });

    return (
        <>
            <CustomModal show={show} id={id} toggleShow={toggleShow} resources={projects}/>
            <Row className='g-0 justify-content-center'
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
            >
                <Col
                    xs={{ span: 8, order: 'last' }}
                    sm={{ span: 8, order: 'last' }}
                    md={{ span: 6, order: 'first' }}
                    lg={{ span: 6, order: 'first' }}
                    xl={{ span: 6, order: 'first' }}
                >
                    {projListL}
                    <Container style={{ marginLeft: '3vw' }}>
                        <br />
                        <div className='pink-banner'>
                            ¿Tienes interés en realizar un proyecto con nosotros?
                        </div>
                        <br />
                        <Button className='contact-button'>Contáctanos</Button>
                        <br /><br /><br />
                    </Container>
                </Col>
                <Col
                    xs={{ span: 8, order: 'first' }}
                    sm={{ span: 8, order: 'first' }}
                    md={{ span: 6, order: 'last' }}
                    lg={{ span: 6, order: 'last' }}
                    xl={{ span: 6, order: 'last' }}
                >
                    <Container
                        className='banner-text'
                        style={{ paddingTop: '90px', marginLeft: '20px', paddingRight: '10vw' }}
                    >
                        <div className='banner-text-title'>Proyectos</div>
                        <p className='banner-text-subtitle'>Creación desde el diseño y lo audiovisual,
                            programas de salud, formación, mapeo y más.</p>
                        <p className='banner-text-light'>Aquí encontrarás proyectos relacionados al
                            fortalecimiento y la participación barrial
                            en Bogotá, consulta y comparte cada uno de
                            estos proyectos. A continuación, puedes escoger
                            una o varias de las siguientes categorías para
                            filtrar los proyectos:</p>
                    </Container>
                    <Row style={{ marginLeft: '-5vw' }}>
                        <Col xs={{ span: 10, offset: 1 }} md={{ span: 3 }} lg={{ span: 2, offset: 1 }}>
                            <AppDatePicker />
                        </Col>
                        <Col xs={{ span: 10, offset: 1 }} md={{ span: 3, offset: 2 }} lg={{ span: 2, offset: 2 }}>
                            <TextDropdown
                                placeholder='tema'
                            />
                        </Col>
                    </Row>
                    <Row style={{ marginLeft: '-5vw' }}>
                        <Col xs={{ span: 8, offset: 1 }}>
                            <Form.Control type="text" placeholder="escribir palabra clave..." />
                        </Col>
                    </Row>
                    <Row style={{ marginLeft: '-5vw' }}>
                        <Col xs={{ span: 10, offset: 1 }}>
                            <Button className='search-button'>Buscar</Button>
                        </Col>
                    </Row>
                    <br />
                    {projListR}
                </Col>
            </Row>
        </>
    );
}

export default Projects;