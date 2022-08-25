import { Container } from 'react-bootstrap';
import './index.css';

type DashboardProps = {
    //
}

function Dashboard(props: DashboardProps) {
    return (
        <div className = 'Dashboard'>
            <section>
                <Container className = 'Dashboard-content' style = {{ maxWidth: 'fit-content' }}>
                    <h1 className = 'Dashboard-h1'>Ditto Real Estate</h1>
                    <p className = 'Dashboard-p'>Sandy Ditto & Associates</p>
                </Container>
            </section>
            <section>
                <Container className = 'Dashboard-about' style = {{maxWidth: '80%'}}>
                    <div className = 'Dashboard-about-content-header'>
                        <h1 className = 'Dashboard-about-h1'>SAVINGS WITHOUT</h1>
                        <h1 className = 'Dashboard-about-h1'>SACRIFICING SERVICE</h1>
                    </div>
                    <div className = 'Dashboard-about-content-header'>
                        <h2 className = 'Dashboard-about-h2'>Our Services</h2>
                    </div>
                    <div className = 'Dashboard-about-content-body'>
                        <div className = 'Dashboard-about-content-left'>
                            <p>Ever see a sign go up in your neighborhood and within days see a sold sign?</p>
                            <p>Ever wonder if the Seller felt a little cheated on the high commission cost of a traditional franchise Real Estate Company when little to no marketing had to be done?</p>
                            <p>Ever wanted to try For Sale by Owner but was intimidated by the contracts, title work and legal aspects?</p>
                            <p>With Sandy Ditto & Associates you can choose those services you wish to pay for and those you wish to do yourself, again <b style = {{color: 'white'}}>WITHOUT SACRIFICING SERVICE</b>. No matter if you choose full service or ala carte you always saver money <b style = {{color: 'white'}}>WITHOUT SACRIFICING SERVICE</b>.</p>
                            <p>Start out with one program and switch to another, you are truly in charge of the marketing of your property with Sandy Ditto.</p>
                        </div>
                    </div>
                    <div className = 'Dashboard-about-content-body'>
                        <div className = 'Dashboard-about-content-right'>
                            <p>With over 44 years of successful sales and marketing experience, Sandy Ditto offers a wide range of options to the marketing of your home. From simple MLS FOR Sale By Owner advertising, at a cost of $399, to full services that range from 2% - 5% commission, you control, without sacrificing services.</p>
                        </div>
                    </div>
                </Container>
            </section> 
        </div>
    );
}

export default Dashboard;

