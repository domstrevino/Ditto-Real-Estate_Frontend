const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


let contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: "replyno675@gmail.com",
    pass: "kurpcpgaxmuofnyd",
    },
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    // auth: {
    //   user: testAccount.user, // generated ethereal user
    //   pass: testAccount.pass, // generated ethereal password
    // },
});

contactEmail.verify((error) => {
    if (error) {
    console.log(error);
    } else {
    console.log("Ready to Send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
    from: name,
    to: "domstrevino@aol.com",
    subject: "Contact Form Submission",
    text: "Hello, World!",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
    if (error) {
        res.json({ status: "ERROR" });
    } else {
        res.json({ status: "Message Sent" });
    }
    });
});



//https://stackoverflow.com/questions/70606793/nodemailer-with-gmail-there-was-an-error-error-invalid-login-535-5-7-8-user
//https://w3collective.com/react-contact-form/