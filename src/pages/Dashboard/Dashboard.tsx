import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import './index.css';

type DashboardProps = {
    //
}

function Dashboard(props: DashboardProps) {
    return (
        <div className = 'Dashboard'>
            <section>
                <div className = 'Dashboard-background'>
                    <div className = 'Dashboard-overlay'>
                        <Container>
                            <Header />
                                <div className = 'Dashboard-content'>
                                    <h1 className = 'Dashboard-h1'>Sandy Ditto</h1>
                                    <p className = 'Dashboard-p'>Sandy Ditto & Associates</p>
                                </div>
                        </Container>
                    </div>
                </div>
            </section>
            <section>
                <Container>
                    <p>Meet Sandy</p>
                </Container>
            </section>
            
        </div>
    );
}

export default Dashboard;