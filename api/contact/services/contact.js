'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/services.html#core-services)
 * to customize this service
 */

 const userEmail = process.env.EMAIL;
 const userPass = process.env.PASSWORD;
 
 let sendEmail = function(){
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
          // service: 'smtp',
          host: 'mail.avowstech.com',
          port: 465,
          secure: true,
          auth: {
              user: userEmail,
              pass: userPass // naturally, replace both with your real credentials or an application-specific password
          }
          .then(message => console.log(message.sid))
      });

        const ORMModel = await strapi.query('contact', plugin).model;
        const mailOptions = await strapi.plugins['email'].services.email.send({
             from: `${contact.email}`,
             to: 'yusha.b@avowstech.com',
             subject: `${contact.services}`,
             text: `${contact.message}`
         });
         strapi.log.debug(`Email sent to ${contact.email}`)
         ctx.send({ message: "Email sent!" })
 
         transporter.sendMail(mailOptions, function (error, info) {
             if (error) {
                 console.log(error);
             } else {
                 console.log('Email sent: ' + info.response);
             }
         });
    }

 let sendMsg = function(){
    const accountSid = process.env.TWILIO_ACCOUNT_SID ;
    const authToken = process.env.TWILIO_AUTH_TOKEN  ;
    const myNumi = process.env.MYNUM;
    const twilioNum =process.env.TWILIONUM;
    
    const client = require('twilio')(accountSid, authToken);
    client.messages
      .create({
         body: 'Hello Admin, someone just posted a comment',
         from: 'mail.avowstech.com', 
         to: userEmail // your own phone number
       })
      .then(message => console.log(message.sid));
   }

module.exports = {
    sendEmail,
    sendMsg
};
