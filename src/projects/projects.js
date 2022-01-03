import React from 'react';
import { Row, Col, Image, Container, Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import '../main-page/main-page.css'

const Projects = () => {
    return (
        <Row className='g-0 justify-content-center'
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
        >
            <Col
                xs={{span: 8, order: 'last'}}
                sm={{span: 8, order: 'last'}}
                md={{span: 6, order: 'first'}}
                lg={{span: 6, order: 'first'}}
                xl={{span: 6, order: 'first'}}
            >
                <Image
                    className='card-left'
                    alt='img'
                    src='/assets/thumbnail.jpg'
                />
                <Image
                    className='card-left'
                    alt='img'
                    src='/assets/thumbnail.jpg'
                />
                <Image
                    className='card-left'
                    alt='img'
                    src='/assets/thumbnail.jpg'
                />
            </Col>
            <Col
                xs={{span: 8, order: 'first'}}
                sm={{span: 8, order: 'first'}}
                md={{span: 6, order: 'last'}}
                lg={{span: 6, order: 'last'}}
                xl={{span: 6, order: 'last'}}
            >
                <Container
                    className='banner-text'
                    style={{ paddingTop: '90px', marginLeft: '20px', paddingRight: '10vw' }}
                >
                    <div className='banner-text-title'>Proyectos</div>
                    <p><b>Creación desde el diseño y lo audiovisual,
                        programas de salud, formación, mapeo y más.</b></p>
                    <p>Aquí encontrarás proyectos relacionados al
                        fortalecimiento y la participación barrial
                        en Bogotá, consulta y comparte cada uno de
                        estos proyectos. A continuación, puedes escoger
                        una o varias de las siguientes categorías para
                        filtrar los proyectos:</p>
                    <Dropdown as={ButtonGroup}>
                        <Button variant="success">Split Button</Button>

                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Image
                    className='card-right'
                    alt='img'
                    src='/assets/thumbnail.jpg'
                />
                <Image
                    className='card-right'
                    alt='img'
                    src='/assets/thumbnail.jpg'
                />
            </Col>
        </Row>
    );
}

export default Projects;