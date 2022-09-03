import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


function Header() {
    return (
        <Navbar className = 'H-Nav'>
            <div className = 'H-Container'>
                <Nav>
                    <Navbar.Brand className = 'H-Brand' href='/'>
                        <div className = 'Wrapper-Logo'>
                            <div>Ditto Real Estate</div>
                            <div className = 'H-h5'>Sandy Ditto & Associates</div>
                        </div>
                    </Navbar.Brand>
                </Nav>
                <Nav>
                    <div className = 'Wrapper-Routes'>
                        <Nav.Item>
                            <Nav.Link className = 'H-Link' href = '/'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className = 'H-Link' href = '/Testimonials'>Testimonials</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className = 'H-Link' href = '/Contact'>Contact</Nav.Link>
                        </Nav.Item>
                    </div>
                </Nav>
            </div>
        </Navbar>
    );
}

export default Header;