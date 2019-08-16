import AuthService from '../services/AuthService'

const signIn = async (req, res) => {
  const payload = await AuthService.signIn(req.body);

  res.json(payload);
}

export default {
  signIn,
}