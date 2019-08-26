import { User } from '../models'
import { UnauthorizedError } from '../handlers/errors'

const create = async ({ name, email, password }) => User.create({
  name,
  email,
  password,
});

const find = async id => User.findByPk(id);

const findByEmail = async email => User.findOne({ 
  where: { email }
});

const isSameUser = (requestUserId, { id }) => {
  if (requestUserId !== id) 
    throw new UnauthorizedError('Requested resource does not belong to the current user');
  
  return true;
}; 

export default {
  create,
  find,
  findByEmail,
  isSameUser,
}