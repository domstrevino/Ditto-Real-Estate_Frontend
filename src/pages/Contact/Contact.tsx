import { Container } from 'react-bootstrap';
import Header from './../../components/Header';


type ContactProps = {
    //
}

function Contact(props: ContactProps) {
    return (
        <>
        <Header />
        <Container>
            <div>About</div>
        </Container>
        </>
    );
}

export default Contact;