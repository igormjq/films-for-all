import jwt from 'jsonwebtoken'
import UserService from './UserService'

const generatePayload = user => {
  return {
    token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 5000 }),
    user,
  }
}; 

const signIn = async ({ email, password }) => {
  const user = await UserService.findByEmail(email);

  if(!user || !user.passwordMatches(password))
    throw new Error('User not found. Check your credentials');

  return generatePayload(user);
  
};

export default {
  signIn,
}