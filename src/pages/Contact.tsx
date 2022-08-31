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
            <div className = 'Contact-About'>
                <Card className = 'Contact-Card' variant = 'outlined'>
                    <CardContent className = 'Contact-CardContent'>
                        <div className = 'Body-Contact'>
                            <div className = 'Body-Left'>
                                <div className = 'picWrapper'>
                                    <img 
                                    className = 'Image' 
                                    src = {picture} 
                                    alt = 'Logo' 
                                    />
                                </div>
                                <div className = 'Contact-Info'>
                                    <h1><b>Sandy Ditto</b></h1>
                                    <h4>CRS, ABR, SRES, C-CREC</h4>
                                    <h4>Broker/Owner</h4>
                                    {/* <div>&nbsp;</div> */}
                                    {/* <p><b>Sandy Ditto & Associates</b></p>
                                    <p>1800 E. Memorial Rd. #101</p>
                                    <p>Oklahoma City, OK 73131</p>
                                    <p>(405) 210-7669</p> */}
                                </div> 
                                
                            </div>
                            <div className = 'Body-Right'>
                                <div className = 'h1-wrapper'>
                                    <h1>Contact</h1>
                                </div>
                                <div className = 'wrapper'>
                                    <form className = 'Form' onSubmit = {sendMail}>
                                    
                                        <ul className = 'List'>
                                            <li className = 'Item'>
                                                {/* <label 
                                                className = 'Label'
                                                htmlFor = 'name'>
                                                Name:
                                                </label><br /> */}

                                                <input 
                                                className = 'Input' 
                                                id = 'name' 
                                                name = 'name' 
                                                type = 'text'
                                                placeholder = 'Name'
                                                />
                                            </li>

                                            <li className = 'Item'>
                                                {/* <label 
                                                className = 'Label' 
                                                htmlFor = 'email'>
                                                E-mail:
                                                </label><br /> */}

                                                <input
                                                className = 'Input'
                                                id = 'email' 
                                                name = 'email' 
                                                type = 'text'
                                                placeholder = 'E-mail'
                                                />
                                            </li>

                                            <li className = 'Item'>
                                                {/* <label 
                                                className = 'Label' 
                                                htmlFor = 'message'>
                                                Message:
                                                </label><br /> */}

                                                <textarea 
                                                className = 'Input'
                                                style = {{  }} 
                                                id = 'message' 
                                                name = 'message'
                                                placeholder = 'Message'
                                                rows = {7}
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
                            
                        </div>
                    </CardContent>
                </Card>

            {/* <div className = 'Body-Contact'> */}
                
            {/* </div> */}
            </div>
        </div>
    );
}

export default Contact;