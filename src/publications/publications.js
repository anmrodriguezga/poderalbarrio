import React from 'react';
import { Row, Col, Image, Container, Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import '../main-page/main-page.css'

const Publications = () => {
    return (
        <Row className='g-0 justify-content-center'
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
        >
            <Col
                xs={8}
                sm={8}
                md={6}
                lg={6}
                xl={6}
            >
                <Container
                    className='banner-text'
                    style={{ paddingTop: '90px', paddingRight: '20px', paddingLeft: '10vw', textAlign: 'right' }}
                >
                    <div className='banner-text-title-inverted'>Publicaciones</div>
                    <p><b>Cartillas, artículos y compilados de infografías 
                        resultado de los proyectos de la organización.</b></p>
                    <p>En esta sección encontrarás publicaciones relacionadas 
                        a temas como trabajo informal, derecho y salud laboral, 
                        espacio público y barrial. Te invitamos a leer y compartir 
                        cada uno de los recursos que aquí consignamos.</p>
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
                    className='book-card-left'
                    alt='img'
                    src='/assets/thumbnail.jpg'
                />
                <Image
                    className='book-card-left'
                    alt='img'
                    src='/assets/thumbnail.jpg'
                />
            </Col>
            <Col
                xs={8}
                sm={8}
                md={6}
                lg={6}
                xl={6}
                style={{zIndex: -1}}
            >
                <Image
                    className='book-card-right'
                    alt='img'
                    src='/assets/thumbnail.jpg'
                />
                <Image
                    className='book-card-right'
                    alt='img'
                    src='/assets/thumbnail.jpg'
                />
                <Image
                    className='book-card-right'
                    alt='img'
                    src='/assets/thumbnail.jpg'
                />
                <Image
                    className='book-card-right'
                    alt='img'
                    src='/assets/thumbnail.jpg'
                />
            </Col>
        </Row>
    );
}

export default Publications;