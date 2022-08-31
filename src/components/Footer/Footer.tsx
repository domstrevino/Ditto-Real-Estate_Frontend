import { MDBFooter } from 'mdb-react-ui-kit';

import './index.css';
import picture from './../../images/ditto_real-estate.png';

function Footer() {
    return (
        <MDBFooter className = 'Footer'>
            <div><img src = {picture} alt = 'Logo' /></div>
            <div className = 'Foot'>
                <h5>Sandy Ditto & Associates</h5>
                <div>1800 E. Memorial Road #101</div>
                <div>Oklahoma City, OK 73131</div>
            </div>
        </MDBFooter>
    );
}

export default Footer;