'use strict';

/**
 * burgerss service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::burgerss.burgerss',
({ strapi }) => ({
  async findOne(ctx) {
    const {id}=ctx.params
    const entitiy =await strapi.db.query(`api::burgerss.burgerss`).findOne({
      where:{slug:id},
      populate:[`featured_image`],

    });
    const sanitizedEntity=await this.sanitizeOutput(entitiy,ctx);
    return this .transformResponse(sanitizedEntity);


}}));
;
