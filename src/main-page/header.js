import Logo from './logo';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './main-page.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{ padding: 20 }}>
            <Container className='header'>
                <Navbar.Brand href="/"><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/poderalbarrio/">INICIO</Nav.Link>
                        <Nav.Link href="/poderalbarrio/about">NOSOTROS</Nav.Link>
                        <Nav.Link href="/poderalbarrio/projects">PROYECTOS</Nav.Link>
                        <Nav.Link href="/poderalbarrio/publications">PUBLICACIONES</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;