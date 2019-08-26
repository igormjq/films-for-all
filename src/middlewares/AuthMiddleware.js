import AuthService from '../services/AuthService';
import { errorHandler } from '../handlers/errorHandler';
import { BadRequestError } from '../handlers/errors'

const extractJwtToken = req => {

  if (!Reflect.ownKeys(req.headers).includes('authorization'))
    throw new BadRequestError('Cabeçalho "authorization" não encontrado');

  const [, token] = req.headers['authorization'].split(' ');

  return token;
};

const authenticateUser = async (req, res, next) => {
  const token = extractJwtToken(req);

  const user = await AuthService.verifyToken(token);

  req.user = user;

  next();
}

export default errorHandler(authenticateUser);