import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


function Header() {
    return (
        <Navbar className = 'H-Nav'>
            <Nav className = "ml-auto">
                <Navbar.Brand>
                    <Nav.Link href = '/'>
                        <div className = 'H-Logo'>
                            <h2>Ditto Real Estate</h2>
                            <h5 className = 'H-h5'>Sandy Ditto & Associates</h5>
                        </div>
                    </Nav.Link>
                </Navbar.Brand>
            </Nav>
            <Nav className = 'ms-auto'>
                <Nav.Item className = 'H-Item'>
                    <Nav.Link className = 'H-Link' href = '/'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className = 'H-Item'>
                    <Nav.Link className = 'H-Link' href = '/Testimonials'>Testimonials</Nav.Link>
                </Nav.Item>
                <Nav.Item className = 'H-Item'>
                    <Nav.Link className = 'H-Link' href = '/Contact'>Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Header;