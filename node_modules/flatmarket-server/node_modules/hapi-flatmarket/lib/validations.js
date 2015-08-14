var Joi = require('joi')

module.exports = {
    createCharge: Joi.object({
        email: Joi.string().email().required(),
        metadata: Joi.any(),
        sku: Joi.string().required(),
        token: Joi.string().token().required(),
    }),
}
