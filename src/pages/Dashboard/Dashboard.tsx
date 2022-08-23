import Header from '../../components/Header';
import './index.css';
import { Container } from 'react-bootstrap';

function Dashboard() {
  return (
    <>
    <div className = 'Dashboard-background'>
      <Container>
        <Header />
      </Container>
    </div>
    </>
  );
}

export default Dashboard;