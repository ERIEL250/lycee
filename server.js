const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
//const env=require("dotenv").config()
const bodyParser=require("body-parser")
const app = express();
// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));
// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/////========ROUTES========////
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html');
});
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});
app.get('/academics', (req, res) => {
    res.sendFile(__dirname + '/views/academics.html');
});


app.post('/send', async(req, res) => {

    const transporter = nodemailer.createTransport({
        service:"gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // 
        auth: {
            user: "ndayisengaeliel@gmail.com",
            pass: "zcuw ffty jxfs swxe"
        }
      });
      const mailoptions={
        from: {
            name: req.body.name,
            address: req.body.email
        }
        ,// list of receivers
        to: "kararaeric23@gmail.com",
        subject: req.body.subject, // Subject line
        text: req.body.message // plain text body
        //html: "<b>hello</b>", // html body
      };
    
    const sendMail=async(transporter,mailoptions)=>{
    try{
    await transporter.sendMail(mailoptions)  ;
    console.log("email sent ")
    }
    catch(error){
    console.error(error);
    }
      }
    sendMail(transporter,mailoptions);
    })

    app.post('/send1', async(req, res) => {


        const output = ` 
    
            <p>You have a new contact request</p>
            <h3>Contact Details</h3>
            <ul>  
              <li>Parent Name: ${req.body.parentName}</li>
              <li>Parent Contact: ${req.body.parentContact}</li>
              <li>Email: ${req.body.email}</li>
              <li>Student Name: ${req.body.childName}</li>
              <li>Student Grade: ${req.body.class}</li>
              
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
          `;
        console.log(output);
    
    
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secure: false,
            port: 587,
            requireTLS: true,
            auth: {
                user: "ndayisengaeliel@gmail.com",
                pass: "zcuw ffty jxfs swxe"
            },
            tls: {
                rejectUnauthorized: false
            },
        });
    
        // setup email data with unicode symbols
        const mailOptions = {
            from: `${ req.body.email }`,
            to: 'ndayisengaeliel@gmail.com',
            subject: `${req.body.parentName}`,
            text: `${req.body.message}`,
            html: output
        };
    
        // send mail with defined transport object
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            res.sendFile(__dirname + '/views/success.html');
        });
    });
    

app.listen(7000, () => console.log('Server started...'));