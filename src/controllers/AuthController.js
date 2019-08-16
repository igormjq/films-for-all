import AuthService from '../services/AuthService'

const signIn = async (req, res) => {
  const payload = await AuthService.signIn(req.body);

  res.json(payload);
}

const register = async (req, res) => {
  const payload = await AuthService.register(req.body);

  res.status(201).json(payload);
}

export default {
  signIn,
  register,
}