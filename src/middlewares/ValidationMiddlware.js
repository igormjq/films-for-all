import Joi from '@hapi/joi'
import { ValidationError } from '../handlers/errors'

export default schema => {
  return async (req, res, next) => {
    try {
      await Joi.validate(req.body, schema, { abortEarly: false });

      next();
    } catch(err) {
      const error = new ValidationError('Validation error', err.details);

      res.status(error.status).json(error);
    }
  }
}