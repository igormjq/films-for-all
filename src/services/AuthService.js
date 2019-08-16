import jwt from 'jsonwebtoken'
import UserService from './UserService'
import { NotFoundError, UnauthorizedError } from '../handlers/errors'

const generatePayload = user => {
  return {
    token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 5000 }),
    user,
  }
}; 

const signIn = async ({ email, password }) => {
  const user = await UserService.findByEmail(email);

  if(!user) throw new NotFoundError('User not found. Check your credentials');
  if(!user.passwordMatches(password)) throw new UnauthorizedError('Incorrect password');

  return generatePayload(user);
  
};

export default {
  signIn,
}