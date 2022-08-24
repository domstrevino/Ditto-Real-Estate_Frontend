import { Menu } from '@mui/icons-material';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import picture from './../../components/Assets/ditto_real-estate.png';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


type HeaderProps = {
    //
}

function Header(props: HeaderProps) {
    return (
        <Navbar className = 'NavClass'>
            <Nav className = "ml-auto">
                <Navbar.Brand>
                    <Nav.Link href = '/'>
                        <img className = 'Dashboard-logo' src = {picture} alt = 'logo' />
                    </Nav.Link>
                </Navbar.Brand>
            </Nav>
            <Nav className = 'ms-auto'>
                <Nav.Item className = 'NavItem'>
                    <Nav.Link className = 'NavLink' href = '/Contact'>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item className = 'NavItem'>
                    <Nav.Link className = 'NavLink' href = '/Testimonials'>Testimonials</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Menu className = 'Menu' />
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default Header;