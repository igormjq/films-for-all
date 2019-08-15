import { User } from '../models'

const findByEmail = async email => User.findOne({ where: { email }});

// async function create()

export default {
  findByEmail,
}