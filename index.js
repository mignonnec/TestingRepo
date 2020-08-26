const config = require('./config.js');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(config.EmailSettings);

if (config.SendEmail) {
    const msg = '<h3>This is a test app</h3>';
    const mailOptions = {
      from: 'Test node js server <0828926369@vodamail.co.za>',
      to: 'mignonnecilliers@gmail.com',
      subject: 'Test nodemailer!',
      html: msg
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('mail error: ', error);
      } else {
      }
    });
  } else {
    console.log('mail not send');
  }
