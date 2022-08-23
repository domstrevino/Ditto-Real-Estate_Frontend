import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import image from './../../images/ditto_real-estate.png'

function Header() {
    return (
        // <Navbar bg="dark" variant="dark" style = {{ padding: 0 }}>
        <Navbar style = {{ padding: 0 }}>
                <Nav className="ml-auto" style = {{ alignItems: 'center' }}>
                    <Nav.Item>
                        <Navbar.Brand>
                            <img className = 'Dashboard-logo' src = {image} alt = 'logo' />
                        </Navbar.Brand>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href = '/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href = '/About'>About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href = '/Testimonials'>Testimonials</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Nav className = 'ms-auto'>
                    <Nav.Item>
                        <Navbar.Brand style = {{ paddingRight: '10px' }}>
                            Sandy Ditto & Associates
                        </Navbar.Brand>
                    </Nav.Item>
                </Nav>
        </Navbar>
    );
}

export default Header;