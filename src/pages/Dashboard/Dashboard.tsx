import { Container } from 'react-bootstrap';
import AliceCarousel from 'react-alice-carousel';
import './index.css';


function Dashboard() {

    const content = [
        <section className = 'Section-1'>
            <h1 className = 'Section-1-h1'>Ditto Real Estate</h1>
            <p className = 'Section-1-p'>Sandy Ditto & Associates</p>
        </section>,

        <section className = 'Section-2'>

            <div className = 'Section-2-head'>
                <h1>SAVINGS WITHOUT</h1>
                <h1>SACRIFICING SERVICE</h1>
            </div>
            <div className = 'Section-2-head'>
                <h2 style = {{ color: 'rgba(255, 255, 255, 0.6)'}}>Our Services</h2>
            </div>
                
            <div className = 'Section-2-body'>
                <p>Ever see a sign go up in your neighborhood and within days see a sold sign?</p>
                <p>Ever wonder if the Seller felt a little cheated on the high commission cost of a traditional franchise Real Estate Company when little to no marketing had to be done?</p>
                <p>Ever wanted to try For Sale by Owner but was intimidated by the contracts, title work and legal aspects?</p>
                <p>With Sandy Ditto & Associates you can choose those services you wish to pay for and those you wish to do yourself, again <b style = {{color: 'white'}}>WITHOUT SACRIFICING SERVICE</b>. No matter if you choose full service or ala carte you always saver money <b style = {{color: 'white'}}>WITHOUT SACRIFICING SERVICE</b>.</p>
                <p>Start out with one program and switch to another, you are truly in charge of the marketing of your property with Sandy Ditto.</p>
            </div>
            <div className = 'Section-2-body'>
                <p>With over 44 years of successful sales and marketing experience, Sandy Ditto offers a wide range of options to the marketing of your home. From simple MLS FOR Sale By Owner advertising, at a cost of $399, to full services that range from 2% - 5% commission, you control, without sacrificing services.</p>
            </div>

        </section>
    ]


    return (
        <div className = 'Dashboard'>
            <Container>
                <AliceCarousel 
                    items = {content}
                    infinite = {true}
                    animationType = {'fadeout'}
                    autoPlay = {true}
                    autoPlayInterval = {10000}
                    autoPlayStrategy = {'default'}
                    // disableButtonsControls = {true}
                    disableDotsControls = {true}
                />
            </Container>
        </div>
    );
}

export default Dashboard;

