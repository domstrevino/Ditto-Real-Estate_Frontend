import { Card, CardContent } from '@mui/material';

import picture from './../images/Sandy-Ditto.jpg';
import './../index.css';


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
            <div className = 'C-About'>
                <Card className = 'C-Card' variant = 'outlined'>
                    <CardContent className = 'C-CardContent'>
                        <div className = 'C-Body'>
                            <div className = 'C-Left'>
                                <img 
                                className = 'C-Image' 
                                src = {picture} 
                                alt = 'Logo' 
                                />
                                <div className = 'C-Info'>
                                    <h1><b>Sandy Ditto</b></h1>
                                    <h4>CRS, ABR, SRES, C-CREC</h4>
                                    <h4>Broker/Owner</h4>
                                </div> 
                                
                            </div>
                            <div className = 'C-Right'>
                                <h1>Contact</h1>

                                <form className = 'C-Form' onSubmit = {sendMail}>
                                    <ul className = 'C-List'>
                                        <li className = 'C-Item'>
                                            <input 
                                            className = 'C-Input' 
                                            id = 'name' 
                                            name = 'name' 
                                            type = 'text'
                                            placeholder = 'Name'
                                            />
                                        </li>

                                        <li className = 'C-Item'>
                                            <input
                                            className = 'C-Input'
                                            id = 'email' 
                                            name = 'email' 
                                            type = 'text'
                                            placeholder = 'E-mail'
                                            />
                                        </li>

                                        <li className = 'C-Item'>
                                            <textarea 
                                            className = 'C-Input'
                                            style = {{  }} 
                                            id = 'message' 
                                            name = 'message'
                                            placeholder = 'Message'
                                            rows = {7}
                                            />
                                        </li>

                                        <input 
                                        className = 'C-Submit' 
                                        type = 'Submit' 
                                        />
                                    </ul>
                                </form>

                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}

export default Contact;