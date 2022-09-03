import './../index.css';

import picture from './../images/ditto_real-estate.png';

function Dashboard() {
    return (
        <div className = 'Dashboard'>

            <div className = 'D-Head'>
                <h1>SAVINGS WITHOUT</h1>
                <div className = 'D-Head-Break'>&nbsp;&nbsp;</div>
                <h1>SACRIFICING SERVICE</h1>
            </div>
            <section className = 'D-Body'>
                <p>Ever see a sign go up in your neighborhood and within days see a sold sign?</p>
                <p>Ever wonder if the Seller felt a little cheated on the high commission cost of a traditional franchise Real Estate Company when little to no marketing had to be done?</p>
                <p>Ever wanted to try For Sale by Owner but was intimidated by the contracts, title work and legal aspects?</p>
                <p>With Sandy Ditto & Associates you can choose those services you wish to pay for and those you wish to do yourself, again <b style = {{color: 'white'}}>WITHOUT SACRIFICING SERVICE</b>. No matter if you choose full service or ala carte you always saver money <b style = {{color: 'white'}}>WITHOUT SACRIFICING SERVICE</b>.</p>
            </section>

            <section className = 'D-Picture'>
                <img src = {picture} alt = 'Logo' />
            </section>

            <div className = 'D-Head'>
                <h2>OUR SERVICES</h2>
            </div>
            <section className = 'D-Body'>
                <p>Start out with one program and switch to another, you are truly in charge of the marketing of your property with Sandy Ditto.</p>
                <p>With over 44 years of successful sales and marketing experience, Sandy Ditto offers a wide range of options to the marketing of your home. From simple MLS For Sale By Owner advertising, at a cost of $399, to full services that range from 2% - 5% commission, you control, without sacrificing services.</p>
                <p>My last 15 sales my Sellers saved an average of over $6,800 in total commissions!</p>
            </section>

        </div>
    );
}

export default Dashboard;