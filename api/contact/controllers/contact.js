'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
 const { parseMultipartData, sanitizeEntity } = require('strapi-utils');


 module.exports = {
  async create(ctx) {
            strapi.services.sms.sendEmail();
            let entity;
            if (ctx.is('multipart')) {
              const { data, files } = parseMultipartData(ctx);
              entity = await strapi.services.contact.create(data, { files });
            } else {
              entity = await strapi.services.contact.create(ctx.request.body);
            }
            return sanitizeEntity(entity, { model: strapi.models.contact });

    //  async create(ctx) {
    //     let entity;
    //     const userEmail = process.env.EMAIL;
    //     const userPass = process.env.PASSWORD;

    //      if (ctx.is('multipart')) {
    //          const { data, files } = parseMultipartData(ctx);
    //          entity = await strapi.services.contact.create(data, { files });
    //      } else {
    //          entity = await strapi.services.contact.create(ctx.request.body);
    //      }
    //      entity = sanitizeEntity(entity, { model: strapi.models.contact });
 
    //      const nodemailer = require('nodemailer');
 
    //      const transporter = nodemailer.createTransport({
    //          // service: 'smtp',
    //          host: 'mail.avowstech.com',
    //          port: 465,
    //          secure: true,
    //          auth: {
    //              user: userEmail,
    //              pass: userPass // naturally, replace both with your real credentials or an application-specific password
    //          }
    //      });
 
    //      const ORMModel = await strapi.query('contact', plugin).model;
    //      const mailOptions = await strapi.plugins['email'].services.email.send({
    //          from: `${contact.email}`,
    //          to: 'yusha.b@avowstech.com',
    //          subject: `${contact.services}`,
    //          text: `${contact.message}`
    //      });
    //      strapi.log.debug(`Email sent to ${contact.email}`)
    //      ctx.send({ message: "Email sent!" })
 
    //      transporter.sendMail(mailOptions, function (error, info) {
    //          if (error) {
    //              console.log(error);
    //          } else {
    //              console.log('Email sent: ' + info.response);
    //          }
    //      });
 
    //      ORMModel.lifecycles.afterCreate(newCustomEntry.toJSON());
    //      return sanitizeEntity(entity, { model: strapi.models.contact });
 
        
     },
 
 };