import React from 'react';
import { Row, Col, Image, Container, Form, Button } from 'react-bootstrap';
import { TextDropdown, AppDatePicker } from '../components/dropdown';
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
                    <br /><br /><br /><br />
                    <p>Puedes escoger una o varias de las siguientes categorías 
                        para filtrar los documentos:</p>
                </Container>
                <Row className='d-flex justify-content-end'>
                    <Col className='col-auto'>
                        <AppDatePicker />
                    </Col>
                    <Col className='col-auto'>
                        <TextDropdown
                            placeholder='tema'
                        />
                    </Col>
                </Row>
                <Row className='d-flex justify-content-end'>
                    <Col style={{ marginRight: '15px' }} sm={8}>
                        <Form.Control type="text" placeholder="escribir palabra clave..." />
                    </Col>
                </Row>
                <Row className='d-flex justify-content-end'>
                    <Col className='col-auto'>
                        <Button className='search-button'>Buscar</Button>
                    </Col>
                </Row>
                <br />
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
                style={{ zIndex: -1 }}
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
                <Container
                    className='banner-text'
                    style={{ paddingTop: '20px', paddingLeft: '20px', paddingRight: '20vw'}}
                >
                    <p><b>Los derechos de reproducción de estas publicaciones 
                        se encuentran limitados, se permite únicamente su difusión 
                        e impresión para fines sin ánimo de lucro y dándo crédito 
                        al autor y la organización.</b></p>
                </Container>
            </Col>
        </Row>
    );
}

export default Publications;