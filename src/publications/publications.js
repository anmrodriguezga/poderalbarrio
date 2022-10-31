import React from 'react';
import { Row, Col, Image, Container, Form, Button } from 'react-bootstrap';
import { TextDropdown, AppDatePicker } from '../components/dropdown';
import { DownloadableImage } from '../components/image';
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
                style={{ zIndex: 10 }}
            >
                <Container
                    className='banner-text'
                    style={{ paddingTop: '90px', paddingRight: '20px', paddingLeft: '10vw', textAlign: 'right' }}
                >
                    <div className='banner-text-title-inverted'>Publicaciones</div>
                    <p className='banner-text-subtitle'>Cartillas, artículos y compilados de infografías
                        resultado de los proyectos de la organización.</p>
                    <p className='banner-text-light' style={{ textAlign: 'right' }}>En esta sección encontrarás publicaciones relacionadas
                        a temas como trabajo informal, derecho y salud laboral,
                        espacio público y barrial. Te invitamos a leer y compartir
                        cada uno de los recursos que aquí consignamos.</p>
                    <br /><br /><br /><br />
                    <p className='banner-text-light' style={{ textAlign: 'right' }}>Puedes escoger una o varias de las siguientes categorías
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
                <div className='book-card-left'>
                    <DownloadableImage
                        publicationLink='./assets/publications/drogas-licitas-e-ilicitas1.pdf'
                        image='./assets/publications/drogas-licitas-e-ilicitas1.png'
                    />
                </div>
                <div className='book-card-left'>
                    <DownloadableImage
                        publicationLink='./assets/publications/ejemplo4.pdf'
                        image='./assets/publications/ejemplo4.png'
                        inverted={true}
                    />
                </div>
            </Col>
            <Col
                xs={8}
                sm={8}
                md={6}
                lg={6}
                xl={6}
            >
                <Image
                    className='book-card-right'
                    alt='img'
                    src='./assets/ejemplo2.jpg'
                />
                <div className='book-card-right'>
                    <DownloadableImage
                        publicationLink='./assets/publications/habitantes-de-calle3.pdf'
                        image='./assets/publications/habitantes-de-calle3.png'
                    />
                </div>
                <div className='book-card-right'>
                    <DownloadableImage
                        publicationLink='./assets/publications/ejemplo3.pdf'
                        image='./assets/publications/ejemplo3.png'
                        inverted={true}
                    />
                </div>
                <div className='book-card-right'>
                    <DownloadableImage
                        publicationLink='./assets/publications/ejemplo5.pdf'
                        image='./assets/publications/ejemplo5.png'
                        inverted={true}
                    />
                </div>
                <Container
                    className='banner-text'
                    style={{ paddingTop: '20px', paddingLeft: '20px', paddingRight: '20vw' }}
                >
                    <p className='banner-text'>Los derechos de reproducción de estas publicaciones
                        se encuentran limitados, se permite únicamente su difusión
                        e impresión para fines sin ánimo de lucro y dándo crédito
                        al autor y la organización.</p>
                </Container>
            </Col>
        </Row>
    );
}

export default Publications;