import { Container } from 'react-bootstrap';
import Header from '../../components/Header';
import './index.css';

type DashboardProps = {
    //
}

function Dashboard(props: DashboardProps) {
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