import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './index.css';

import { Container, Card, CardContent, Typography } from '@mui/material';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const testimonialOne = 'Sandy Ditto sold my home to the first "looker". My neighbors were amazed. I have put in a lot of good words to everyone I know. Your friendly and prompt service was appreciated.';
const oneWriter = '- Janis Tietgens Gibson';

const testimonialTwo = 'Sandy Ditto sold my home in 6 months in a hard to sell area with a slow market. She was always available for any questions, prompt to respond and made the experince a breeze. Very professional. I would recommend her services to anyone and my husband and I have used her services multiple times with wonderful outcomes.';
const twoWriter = '-Tesha Davis';

const testimonialThree = 'I cannot recommend Sany Ditto highly enough. We have used two previous Realtors with no success, no feedback and slow returning our calls. Sandy was always ready to answer questions, return our calls, give us feedback and saved us money. Give Sandy a chance and you will be very pleased, just as we were. By the way, Sandy Ditto had our house sold in less than 30 days.';
const threeWriter = '-Lou & Rose Marie Varga';

const testimonialFour = "Sandy Ditto's assistance, expedience and professionalism with the listing and sale of our Grandmother's condo was greatly appreciated. We were pleasantly surprised at how seamless and smooth the process occurred. I am happy to recommend Sandy Ditto for anyone that desires great organizational skills and a pleasant demeanor.";
const fourWriter = '-Brian Shingleton';

const testimonials = [
    <Card className = 'Card' variant = 'outlined'>
        <CardContent className = 'Card-Content'>
            <Typography gutterBottom>
                <FaQuoteLeft className = 'Quote-Left' />
                {testimonialOne}
                <FaQuoteRight className='Quote-Right' />
            </Typography>
            <div>&nbsp;</div>
            <Typography className = 'Author' gutterBottom>
                {oneWriter}
            </Typography>
        </CardContent>
    </Card>,

    <Card className = 'Card' variant = 'outlined'>
        <CardContent className = 'Card-Content'>
            <Typography gutterBottom>
                <FaQuoteLeft className = 'Quote-Left' />
                {testimonialTwo}
                <FaQuoteRight className='Quote-Right' />
            </Typography>
            <div>&nbsp;</div>
            <Typography className = 'Author' gutterBottom>
                {twoWriter}
            </Typography>        
        </CardContent>
    </Card>,
    
    <Card className = 'Card' variant = 'outlined'>
        <CardContent className = 'Card-Content'>
            <Typography gutterBottom>
                <FaQuoteLeft className = 'Quote-Left' />
                {testimonialThree}
                <FaQuoteRight className='Quote-Right' />
            </Typography>
            <div>&nbsp;</div>
            <Typography className = 'Author' gutterBottom>
                {threeWriter}
            </Typography>
        </CardContent>
    </Card>,

    <Card className = 'Card' variant = 'outlined'>
        <CardContent className = 'Card-Content'>
            <Typography gutterBottom>
                <FaQuoteLeft className = 'Quote-Left' />
                {testimonialFour}
                <FaQuoteRight className='Quote-Right' />
            </Typography>
            <div>&nbsp;</div>
            <Typography className = 'Author' gutterBottom>
                {fourWriter}
            </Typography>
        </CardContent>
    </Card>
    
];

function Testimonials() {
    return (
        <div className = 'Testimonials'>
            <h1 className = 'Head-h1'>Testimonials</h1>
            <p className = 'Head-p'>What clients are saying...</p>
            <Container>
                <div className = 'Body'>
                    <AliceCarousel 
                    items = {testimonials}
                    infinite = {true}
                    animationType = {'fadeout'}
                    autoPlay = {true}
                    autoPlayInterval = {4000}
                    autoPlayStrategy = {'default'}
                    disableButtonsControls = {true}
                    />
                </div>
            </Container>
        </div>
    );
}

export default Testimonials;