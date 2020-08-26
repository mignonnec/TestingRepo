const config = require('./config.js');
const dateFormat = "DD/MM/YYYY HH:mm"
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(config.EmailSettings);

if (config.SendEmail) {
    const msg = '<h3>Pakati SalesSite</h3>';
    const mailOptions = {
      from: 'Pakati SalesSite <0828926369@vodamail.co.za>',
      to: 'mignonnecilliers@gmail.com',
      subject: 'Vodacom Fibre Application!',
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
