import { Container, Card, CardContent } from '@mui/material';

import picture from './../../images/Sandy-Ditto.jpg';
import './index.css';


function Contact() {

    const sendMail = async (e: any) => {
        e.preventDefault();

        const { name, email, message } = e.target.elements;
        const details = {
            name: name.value,
            email: email.value,
            message: message.value
        };

        const response = await fetch("https://dittorealestate.herokuapp.com/", {
            method: "POST",
            headers: {
                "Clear-Site-Data": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
        });
        
        const result = await response.json();
        alert(result.status);
    };

    

    return (
        <div className = 'Contact'>
            <Container>
                <div className = 'Contact-About'>
                    <Card variant = 'outlined'>
                        <CardContent className = 'Contact-CardContent'>
                            <div className = 'Body-Contact'>
                                <div className = 'Body-Left'>
                                    <form onSubmit = {sendMail}>
                                        <h1>Contact</h1>
                                        <p>Please fill this form in a decent manner</p>

                                        <ul className = 'List'>
                                            <li className = 'Item'>
                                                <label 
                                                className = 'Label'
                                                htmlFor = 'name'>
                                                Name:
                                                </label><br />

                                                <input 
                                                className = 'Input' 
                                                id = 'name' 
                                                name = 'name' 
                                                type = 'text' 
                                                />
                                            </li>

                                            <li className = 'Item'>
                                                <label 
                                                className = 'Label' 
                                                htmlFor = 'email'>
                                                E-mail:
                                                </label><br />

                                                <input
                                                className = 'Input'
                                                id = 'email' 
                                                name = 'email' 
                                                type = 'text' 
                                                />
                                            </li>

                                            <li className = 'Item'>
                                                <label 
                                                className = 'Label' 
                                                htmlFor = 'message'>
                                                Message:
                                                </label><br />

                                                <textarea 
                                                className = 'Input'
                                                style = {{  }} 
                                                id = 'message' 
                                                name = 'message' 
                                                rows = {10}
                                                />
                                            </li>

                                            <input 
                                            className = 'Submit' 
                                            type = 'Submit' 
                                            />
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
    
                    <div className = 'Body-Contact'>
                        <div className = 'Body-Right'>
                            <img 
                            className = 'Image' 
                            src = {picture} 
                            alt = 'logo' 
                            />
                        </div>
                        <div className = 'Contact-Info'>
                            <h1><b>Sandy Ditto</b></h1>
                            <h4>CRS, ABR, SRES, C-CREC</h4>
                            <h4>Broker/Owner</h4>
                            <div>&nbsp;</div>
                            <p><b>Sandy Ditto & Associates</b></p>
                            <p>1800 E. Memorial Rd. #100</p>
                            <p>Oklahoma City, OK 73131</p>
                            <p>(405) 210-7669</p>
                        </div> 
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Contact;