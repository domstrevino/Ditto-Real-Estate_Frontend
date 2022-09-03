import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Navbar className = 'H-Nav'>
            <div className = 'H-Container'>
                <Nav>
                    <Navbar.Brand className = 'H-Brand' href='/'>
                        <div className = 'Wrapper-Logo'>
                            <div>Ditto Real Estate</div>
                            <div className = 'H-Sub'>Sandy Ditto & Associates</div>
                        </div>
                    </Navbar.Brand>
                </Nav>
                <Nav>
                    <div className = 'Wrapper-Routes'>
                        <Nav.Item className = 'H-Item'>
                            <NavLink to = '/' className = {(status) => (status.isActive ? 'active' : 'inactive')}>Home</NavLink>
                        </Nav.Item>
                        <Nav.Item className = 'H-Item'>
                            <NavLink to = '/Testimonials' className = {(status) => (status.isActive ? 'active' : 'inactive')}>Testimonials</NavLink>
                        </Nav.Item>
                        <Nav.Item className = 'H-Item'>
                            <NavLink to = '/Contact' className = {(status) => (status.isActive ? 'active' : 'inactive')}>Contact</NavLink>
                        </Nav.Item>
                    </div>
                </Nav>
            </div>
        </Navbar>
    );
}

export default Header;