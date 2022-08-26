/* eslint-disable no-lone-blocks */
import { Container } from 'react-bootstrap';
import './index.css';
import image from './../../components/Assets/Sandy-Ditto.jpg';
import React, { useState } from 'react';

type ContactProps = {
    //
}

function Contact(props: ContactProps) {
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;

        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        };
        let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setFormData({...formData, [e.target.name]: e.target.value});
    // };
    // const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //     setFormData({...formData, [e.target.name]: e.target.value});
    // }

    return (
        <div className = 'Contact'>
            <Container className = 'Contact-about' style = {{ maxWidth: '80%', marginTop: '5%'}}>
                <div className = 'Contact-about-content-body'>
                    <div className = 'Contact-about-content-left'>
                        <form onSubmit = {handleSubmit} style = {{ height: '100%'}}>
                            <h1>Contact Us</h1>
                            <p>Please fill this form in a decent manner</p>

                            <ul style={{ listStyle: 'none', listStyleType: 'none', padding: 0 }}>
                                <li className = 'Contact-li'>
                                    <label className = 'Contact-label' htmlFor = 'name'>Full Name:</label>

                                    <div className = 'Contact-input'>
                                        <input id = 'name' name = 'name' type = 'text' />
                                    </div>
                                </li>

                                <li className = 'Contact-li'>
                                    <label className = 'Contact-label' htmlFor = 'email'>E-mail:</label>

                                    <div className = 'Contact-input'>
                                        <input id = 'email' name = 'email' type = 'text' />
                                    </div>
                                </li>

                                <li className = 'Contact-li'>
                                    <label className = 'Contact-label' htmlFor = 'message'>Message:</label>

                                    <div className = 'Contact-input'>
                                        <textarea rows = {10} style = {{ height: 'auto', resize: 'none' }} id = 'message' name = 'message' />
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