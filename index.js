const nodemailer = require("nodemailer");
require("dotenv").config();

const message = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        font-family: sans-serif;
      }

      p {
        margin: 2rem auto 0;
        text-align: center;
        max-width: 40ch;
      }

      h1,
      footer {
        text-align: center;
      }

      footer {
        margin-top: 2rem;
        background: #000;
        color: white;
        padding: 1.5rem;
      }
    </style>
  </head>
  <body>
    <h1>SENDING EMAILS THE 21st CENTURY WAY</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quos sed quod suscipit, labore
      quia quidem illum voluptate atque corrupti!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque asperiores eligendi,
      cupiditate qui laboriosam facilis!
    </p>
    <footer>Nodemailer | 2021</footer>
  </body>
</html>
`;

// ALL EMAIL SERVICES THAT NODEMAILER SUPPORTS -> https://nodemailer.com/smtp/well-known/

// DEPLOYMENT TRANSPORTER
// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: process.env.EMAIL, // Your Gmail Account Credentials
//     pass: process.env.PW // Your Gmail Account Credentials
//   }
// });

// TESTING TRANSPORTER
const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.EMAIL_T, //mailtrap credentials here!
    pass: process.env.PW_T //mailtrap credentials here!
  }
});

// send mail with defined transport object
transporter.sendMail({
  from: '"Senders Name here! 👀" <sendersemail@here.com>', // sender address
  to: "<receiveremail@here.com>", // list of receivers
  subject: "WE ARE LIVE! 🔥", // Subject line
  text: "Hello world?", // plain text body
  html: message // html body
});
