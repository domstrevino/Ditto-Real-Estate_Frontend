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
                                    <h6>CRS, ABR, SRES, C-CREC</h6>
                                    <h6>Broker/Owner</h6>
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
                        <div className = 'C-Bottom'>
                            <p>
                                <a 
                                href='http://maps.google.com/?q=1800?East?Memorial?Road?STE?101,?Oklahoma?City,?OK?73131'
                                target = '_blank'
                                rel = 'noopener noreferrer'>
                                    1800 E. Memorial Rd. #101<br /> Oklahoma City, OK 73131
                                </a>
                            </p>
                            <p>
                                <a href = 'tel:4052107669'>
                                    (405) 210-7669
                                </a>
                            </p>
                            <p>sandyditto47@gmail.com</p>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}

export default Contact;