import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './index.css';
import { Container } from 'react-bootstrap';
import { Card, CardContent, Typography } from '@mui/material';
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
    <Card className = 'Testimonials-card' variant = 'outlined' style = {{ backgroundColor: 'rgb(18, 18, 18)'}}>
        <CardContent>
            <Typography className = 'Testimonials-card-content' gutterBottom>
                <FaQuoteLeft className = 'quoteLeft' />
                {testimonialOne}
                <FaQuoteRight className='quoteRight' />
            </Typography>
            <div>&nbsp;</div>
            <Typography className = 'Testimonials-card-content' style = {{ fontStyle: 'italic', fontWeight: 'bold', letterSpacing: 1, color: 'white' }} gutterBottom>{oneWriter}</Typography>
        </CardContent>
    </Card>,

    <Card className = 'Testimonials-card' variant = 'outlined' style = {{ backgroundColor: 'rgb(18, 18, 18)'}}>
        <CardContent>
            <Typography className = 'Testimonials-card-content' gutterBottom>
                <FaQuoteLeft className = 'quoteLeft' />
                {testimonialTwo}
                <FaQuoteRight className='quoteRight' />
            </Typography>
            <div>&nbsp;</div>
            <Typography className = 'Testimonials-card-content' style = {{ fontStyle: 'italic', fontWeight: 'bold', letterSpacing: 1, color: 'white' }} gutterBottom>{twoWriter}</Typography>
        </CardContent>
    </Card>,
    
    <Card className = 'Testimonials-card' variant = 'outlined' style = {{ backgroundColor: 'rgb(18, 18, 18)'}}>
        <CardContent>
            <Typography className = 'Testimonials-card-content' gutterBottom>
                <FaQuoteLeft className = 'quoteLeft' />
                {testimonialThree}
                <FaQuoteRight className='quoteRight' />
            </Typography>
            <div>&nbsp;</div>
            <Typography className = 'Testimonials-card-content' style = {{ fontStyle: 'italic', fontWeight: 'bold', letterSpacing: 1, color: 'white' }} gutterBottom>{threeWriter}</Typography>
        </CardContent>
    </Card>,

    <Card className = 'Testimonials-card' variant = 'outlined' style = {{ backgroundColor: 'rgb(18, 18, 18)'}}>
        <CardContent>
            <Typography className = 'Testimonials-card-content' gutterBottom>
                <FaQuoteLeft className = 'quoteLeft' />
                {testimonialFour}
                <FaQuoteRight className='quoteRight' />
            </Typography>
            <div>&nbsp;</div>
            <Typography className = 'Testimonials-card-content' style = {{ fontStyle: 'italic', fontWeight: 'bold', letterSpacing: 1, color: 'white' }} gutterBottom>{fourWriter}</Typography>
        </CardContent>
    </Card>
    
];

function Testimonials() {
    return (
        <div className = 'Testimonials'>
            <h1 className = 'Testimonials-h1'>Testimonials</h1>
            <p className = 'Testimonials-p'>What our clients are saying...</p>
            <Container className = 'Testimonials-content'>
                <AliceCarousel 
                items = {testimonials}
                infinite = {true}
                animationType = {'fadeout'}
                autoPlay = {true}
                autoPlayInterval = {4000}
                autoPlayStrategy = {'default'}
                disableButtonsControls = {true}
                />
            </Container>
        </div>
    );
}

export default Testimonials;