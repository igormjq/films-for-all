import Joi from '@hapi/joi'

export const AuthValidator = {
  register: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    name: Joi.string().min(3).required(),
  })
}

export const FilmValidator = {
  update: Joi.object().keys({
    title: Joi.string(),
    director_id: Joi.number().integer(),
  })
}