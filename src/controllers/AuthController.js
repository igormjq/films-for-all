import AuthService from '../services/AuthService'

const signIn = async (req, res) => {
  const payload = await AuthService.signIn(req.body);

  res.json(payload);
}

const signOut = async (req, res) => {
  await AuthService.signOut(req.user);

  res.status(204).json({
    message: 'Logged out successfully'
  });
}

const register = async (req, res) => {
  const payload = await AuthService.register(req.body);

  res.status(201).json(payload);
}

export default {
  signIn,
  signOut,
  register,
}