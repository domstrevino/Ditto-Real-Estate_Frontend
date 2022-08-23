import { Container } from 'react-bootstrap';
import Header from './../../components/Header/Header';


type AboutProps = {
    //
}

function About(props: AboutProps) {
    return (
        <>
        <Header />
        <Container>
            <div>About</div>
        </Container>
        </>
    );
}

export default About;