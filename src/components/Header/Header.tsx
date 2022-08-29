import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import picture from './../../images/ditto_real-estate.png';


function Header() {
    return (
        <Navbar className = 'NavClass'>
            <Nav className = "ml-auto">
                <Navbar.Brand>
                    <Nav.Link href = '/'>
                        <img
                        className = 'Logo'
                        src = {picture}
                        alt = 'Logo'
                        />
                    </Nav.Link>
                </Navbar.Brand>
            </Nav>
            <Nav className = 'ms-auto'>
                <Nav.Item className = 'Item'>
                    <Nav.Link className = 'Link' href = '/'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className = 'Item'>
                    <Nav.Link className = 'Link' href = '/Testimonials'>Testimonials</Nav.Link>
                </Nav.Item>
                <Nav.Item className = 'Item'>
                    <Nav.Link className = 'Link' href = '/Contact'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Header;