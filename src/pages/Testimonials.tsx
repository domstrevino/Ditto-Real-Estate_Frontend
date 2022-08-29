import { Card, CardContent, Typography } from '@mui/material';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import './../index.css';

const testOne = 'Sandy Ditto sold my home to the first "looker". My neighbors were amazed. I have put in a lot of good words to everyone I know. Your friendly and prompt service was appreciated.';
const testTwo = 'Sandy Ditto sold my home in 6 months in a hard to sell area with a slow market. She was always available for any questions, prompt to respond and made the experince a breeze. Very professional. I would recommend her services to anyone and my husband and I have used her services multiple times with wonderful outcomes.';
const testThree = 'I cannot recommend Sany Ditto highly enough. We have used two previous Realtors with no success, no feedback and slow returning our calls. Sandy was always ready to answer questions, return our calls, give us feedback and saved us money. Give Sandy a chance and you will be very pleased, just as we were. By the way, Sandy Ditto had our house sold in less than 30 days.';
const testFour = "Sandy Ditto's assistance, expedience and professionalism with the listing and sale of our Grandmother's condo was greatly appreciated. We were pleasantly surprised at how seamless and smooth the process occurred. I am happy to recommend Sandy Ditto for anyone that desires great organizational skills and a pleasant demeanor.";

const one = '- Janis Tietgens Gibson';
const two = '-Tesha Davis';
const three = '-Lou & Rose Marie Varga';
const four = '-Brian Shingleton';


function Testimonials() {
    return (
        <div className = 'Testimonials'>
            <div className = 'T-Head'>
                <h1>Testimonials</h1>
            </div>
            {/* CARD ONE */}
            <div className = 'T-Cards'>
                <Card className = 'T-Card' variant = 'outlined'>
                    <CardContent className = 'T-Card-Content'>
                        <Typography gutterBottom>
                            <FaQuoteLeft className = 'T-Left' />
                            {testOne}
                            <FaQuoteRight className='T-Right' />
                        </Typography>
                        <Typography className = 'T-Author' gutterBottom>
                            {one}
                        </Typography>
                    </CardContent>
                </Card>
                {/* CARD TWO */}
                <Card className = 'T-Card' variant = 'outlined'>
                    <CardContent className = 'T-Card-Content'>
                        <Typography gutterBottom>
                            <FaQuoteLeft className = 'T-Left' />
                            {testTwo}
                            <FaQuoteRight className='T-Right' />
                        </Typography>
                        <Typography className = 'T-Author' gutterBottom>
                            {two}
                        </Typography>        
                    </CardContent>
                </Card>
                {/* CARD THREE */}
                <Card className = 'T-Card' variant = 'outlined'>
                    <CardContent className = 'T-Card-Content'>
                        <Typography gutterBottom>
                            <FaQuoteLeft className = 'T-Left' />
                            {testThree}
                            <FaQuoteRight className='T-Right' />
                        </Typography>
                        <Typography className = 'T-Author' gutterBottom>
                            {three}
                        </Typography>
                    </CardContent>
                </Card>
                {/* CARD FOUR */}
                <Card className = 'T-Card' variant = 'outlined'>
                    <CardContent className = 'T-Card-Content'>
                        <Typography gutterBottom>
                            <FaQuoteLeft className = 'T-Left' />
                            {testFour}
                            <FaQuoteRight className='T-Right' />
                        </Typography>
                        <Typography className = 'T-Author' gutterBottom>
                            {four}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Testimonials;