import { Container } from 'react-bootstrap';
import './index.css';

type DashboardProps = {
    //
}

function Dashboard(props: DashboardProps) {
    return (
        <div className = 'Dashboard'>
            <Container className = 'Dashboard-content'>
                <h1 className = 'Dashboard-h1'>Ditto Real Estate</h1>
                <p className = 'Dashboard-p'>Sandy Ditto & Associates</p>
            </Container>
        </div>
    );
}

export default Dashboard;