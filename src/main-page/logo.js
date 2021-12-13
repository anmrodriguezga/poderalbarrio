import logo from './logo.svg';
import { Container, Image } from 'react-bootstrap';

const Logo = () => {
    return (
        <Container>
            <Image src={logo} className='Logo' alt='Logo' />
        </Container>
    );
}

export default Logo;