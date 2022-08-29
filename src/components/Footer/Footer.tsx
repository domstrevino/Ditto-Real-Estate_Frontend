import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import './index.css';


function Footer() {
    return (
        <MDBFooter bgColor = 'dark'>
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <h6>Sandy Ditto & Associates</h6>
                        <p>1800 E. Memorial Road #101</p>
                        <p></p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );
}

export default Footer;