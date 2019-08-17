import jwt from 'jsonwebtoken'
import UserService from './UserService'
import { NotFoundError, UnauthorizedError } from '../handlers/errors'

const generatePayload = async user => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 5000 });
  user.set('token', token);
  
  await user.save();

  const { id, name, email } = user;
  
  return {
    token,
    user: {
      id,
      name,
      email,
    },
  }
}

const signIn = async ({ email, password }) => {
  const user = await UserService.findByEmail(email);

  if(!user) throw new NotFoundError('User not found. Check your credentials');
  if(!user.passwordMatches(password)) throw new UnauthorizedError('Incorrect password');

  return generatePayload(user);
}

const register = async user => {
  const newUser = await UserService.create(user);

  return generatePayload(newUser);
}

export default {
  signIn,
  register,
}