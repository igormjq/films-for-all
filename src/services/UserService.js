import { User } from '../models'

const create = async ({ name, email, password }) => User.create({
  name,
  email,
  password,
});

const findByEmail = async email => User.findOne({ 
  where: { email }
});

export default {
  create,
  findByEmail,
}