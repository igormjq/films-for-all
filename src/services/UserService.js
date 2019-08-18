import { User } from '../models'

const create = async ({ name, email, password }) => User.create({
  name,
  email,
  password,
});

const find = async id => User.findByPk(id);

const findByEmail = async email => User.findOne({ 
  where: { email }
});

export default {
  create,
  find,
  findByEmail,
}