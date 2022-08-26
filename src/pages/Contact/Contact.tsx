/* eslint-disable no-lone-blocks */
import axios from 'axios';
import { Container } from 'react-bootstrap';
import './index.css';
import image from './../../components/Assets/Sandy-Ditto.jpg';
import React, { useState } from 'react';

const API_PATH = 'http://localhost/src/api/index.php';

type ContactProps = {
    name: string;
    email: string;
    message: string;
    mailSent: boolean;
    error: string;
}

function Contact(props: ContactProps) {
    const [formData, setFormData] = useState({name: '', email: '', message: '', mailSent: false, error: null})
    
    const handleSubmit = (e: any) => {
        
        e.preventDefault();

        axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: formData
        })
        .then(result => {
            setFormData({ ...formData,
            mailSent: result.data.sent
            })
        })
        .catch(error => setFormData({ ...formData, error: error.message }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <div className = 'Contact'>
            <Container className = 'Contact-about' style = {{ maxWidth: '80%', marginTop: '5%'}}>
                <div className = 'Contact-about-content-body'>
                    <div className = 'Contact-about-content-left'>

                        <form method = 'post' action = '<?php echo ($_SERVER' onSubmit = {handleSubmit} style = {{ height: '100%'}}>
                            <h1>Contact Us</h1>
                            <p>Please fill this form in a decent manner</p>

                            <ul style={{ listStyle: 'none', listStyleType: 'none', padding: 0 }}>
                                <li className = 'Contact-li'>
                                    <label className = 'Contact-label' htmlFor = 'name'>Full Name:</label>

                                    <div className = 'Contact-input'>
                                        <input id = 'name' name = 'name' type = 'text' onChange = {handleChange} />
                                    </div>
                                </li>

                                <li className = 'Contact-li'>
                                    <label className = 'Contact-label' htmlFor = 'email'>E-mail:</label>

                                    <div className = 'Contact-input'>
                                        <input id = 'email' name = 'email' type = 'text' onChange = {handleChange}/>
                                    </div>
                                </li>

                                <li className = 'Contact-li'>
                                    <label className = 'Contact-label' htmlFor = 'message'>Message:</label>

                                    <div className = 'Contact-input'>
                                        <textarea rows = {10} style = {{ height: 'auto', resize: 'none' }} id = 'message' name = 'message' onChange = {handleChangeTextArea} />
                                    </div>
                                </li>

                                <div className = 'Contact-submit'>
                                    <input type = 'submit' value = 'Submit' />
                                </div>
                            </ul>

                        </form>
                    </div>
                </div>
                <div className = 'Contact-about-content-body'>
                    <div className = 'Contact-about-content-right'>
                        <img src = {image} alt = 'logo' />
                    </div>
                    <div className = 'Contact-about-info-p'>
                        <h2><b>Sandy Ditto</b></h2>
                        <h2>CRS, ABR, SRES, C-CREC</h2>
                        <h2>Broker/Owner</h2>
                        <div>&nbsp;</div>
                        <p><b>Sandy Ditto & Associates</b></p>
                        <p>1800 E. Memorial Rd. #100</p>
                        <p>Oklahoma City, OK 73131</p>
                        <p>(405) 210-7669</p>
                    </div> 
                </div>
            </Container>
        </div>
    );
}

export default Contact;



//https://stackoverflow.com/questions/57766906/react-typescript-how-to-get-form-values-and-response-codes-using-fetch
//https://salesforce.stackexchange.com/questions/299002/cannot-assign-to-read-only-property-field-name-of-object-object
//https://www.pluralsight.com/guides/defining-props-in-react-function-component-with-typescript
//https://blog.bitsrc.io/how-to-build-a-contact-form-with-react-js-and-php-d5977c17fec0