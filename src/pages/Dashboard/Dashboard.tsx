import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import './index.css';
// import './index.css';
// import styles from './index.css';
// import image from './../../images/downtown-okc.jpg'

type DashboardProps = {
    //
}

function Dashboard(props: DashboardProps) {
    return (
        <>
        {/* <div style = {{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100vw', height: '100vh', imageRendering: '-webkit-optimize-contrast' }}> */}
        {/* <div className = 'Dashboard-background'> */}
            <video style = {{ position: 'fixed', height: '100%'}} autoPlay loop muted>
                <source src = '7687883c-137a0f57.mp4' type = 'video/mp4' />
            </video>
            <Container>
            <Header />
            <div>Dashboard</div>
            <div>Dashboard</div>
            <div>Dashboard</div>
            <div>Dashboard</div>
            <div>Dashboard</div>
            <div>Dashboard</div>
            <div>Dashboard</div>
            <div>Dashboard</div>
            <div>Dashboard</div>
            <div>Dashboard</div>
            <div>Dashboard</div>
            <div>Dashboard</div>
            <div>Dashboard</div>
            </Container>
        {/* </div> */}
        </>
    );
}
//style = {{ backgroundImage: }}
export default Dashboard;