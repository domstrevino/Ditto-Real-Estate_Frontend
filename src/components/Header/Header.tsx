import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Menu } from '@mui/icons-material';
import 'bootstrap/dist/css/bootstrap.css';
import picture from './../../components/Assets/ditto_real-estate.png';

function Header() {
    return (
        <Navbar>
            <Nav className="ml-auto" style = {{ alignItems: 'center' }}>
                <Nav.Item>
                    <Navbar.Brand style={{ paddingLeft: '10px' }}>
                        <img className = 'Dashboard-logo' src = {picture} alt = 'logo' />
                    </Navbar.Brand>
                </Nav.Item>
            </Nav>
            <Nav className = 'ms-auto' style = {{ alignItems: 'center' }}>
                <Nav.Item style = {{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <Nav.Link href = '/'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item style = {{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <Nav.Link href = '/Contact'>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item style = {{ paddingLeft: '10px', paddingRight: '10px' }}>
                    <Nav.Link href = '/Testimonials'>Testimonials</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Menu style = {{ margin: 10 }} />
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Header;