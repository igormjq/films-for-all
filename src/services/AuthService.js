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

const signOut = async user => {
  user.set('token', null);

  await user.save();

  return;
}

const register = async user => {
  const newUser = await UserService.create(user);

  return generatePayload(newUser);
}

const verifyToken = async token => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // if(!decoded) throw new UnauthorizedError('Invalid token');

    const user = await UserService.find(decoded.id);

    return user;

  } catch (err) {
    throw new UnauthorizedError('Invalid token');
  }

  
}

export default {
  signIn,
  signOut,
  register,
  verifyToken,
}