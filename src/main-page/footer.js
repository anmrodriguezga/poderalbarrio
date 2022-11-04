import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from "@fortawesome/free-brands-svg-icons";
import './main-page.css';

const Footer = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{
            padding: 20, position: 'relative', bottom: '0', width: '100%'
        }}>
            <Container className='footer'>
                <Nav.Link href="mailto:ciudadunidabog@gmail.com">ciudadunidabog@gmail.com</Nav.Link>
                <Nav className='footerLinks'>
                    <Row>
                        {/* <Col className='icons'>
                            <Nav.Link href="https://www.facebook.com/" target='_blank'>
                                <FontAwesomeIcon icon={Icons.faFacebookF} size='2x' />
                            </Nav.Link>
                        </Col>
                        <Col className='icons'>
                            <Nav.Link href="https://www.instagram.com/" target='_blank'>
                                <FontAwesomeIcon icon={Icons.faInstagram} size='2x' />
                            </Nav.Link>
                        </Col> */}
                        <Col className='icons'>
                            <Nav.Link href="https://www.tiktok.com/@ciudadunida411?lang=es" target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={Icons.faTiktok} size='2x' />
                            </Nav.Link>
                        </Col>
                        <Col className='icons'>
                            <Nav.Link href="https://www.youtube.com/channel/UCjUSHOijgcDWkFwVEWSwZMQ" target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={Icons.faYoutube} size='2x' />
                            </Nav.Link>
                        </Col>
                    </Row>
                </Nav>
            </Container>
        </Navbar >
    );
}

export default Footer;