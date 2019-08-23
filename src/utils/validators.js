import Joi from '@hapi/joi'

export const AuthValidator = {
  register: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    name: Joi.string().min(3).required(),
  })
}

export const FilmValidator = {
  create: Joi.object().keys({
    title: Joi.string(),
    director: Joi.object().keys({
      name: Joi.string().required(),
    }),
    director_id: Joi.number().integer(),
    inventory: Joi.object().keys({
      amount: Joi.number().integer().required()
    })
  }).without('director', ['director_id']),
  update: Joi.object().keys({
    title: Joi.string(),
    director_id: Joi.number().integer(),
    inventory: Joi.object().keys({
      amount: Joi.number().integer().required(),
    })
  }),
  updateInventory: Joi.object().keys({
    amount: Joi.number().integer().required(),
  })
}