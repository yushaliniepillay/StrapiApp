'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');


module.exports = {

    async create(ctx) {
        let entity;
        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.contact.create(data, { files });
        } else {
            entity = await strapi.services.contact.create(ctx.request.body);
        }
        entity = sanitizeEntity(entity, { model: strapi.models.contact });

        const ORMModel = await strapi.query('contact', plugin).model;
        const newCustomEntry = await strapi.plugins['email'].services.email.send({
                to: 'yusha.b@avowstech.com',
                from: contact.email,
                replyTo: 'no-reply@strapi.io',
                subject: `A new message from Avows contact form, subject: ${contact.services}`,
                text: contact.message,
                html: contact.message,
            });
            strapi.log.debug(`Email sent to ${contact.email}`)
            ctx.send({ message: "Email sent!" })
            

        ORMModel.lifecycles.afterCreate(newCustomEntry.toJSON());
        
        
        // return sanitizeEntity(entity, { model: strapi.models.contact });
    },

};
