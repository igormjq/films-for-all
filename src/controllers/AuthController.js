import AuthService from '../services/AuthService'

const signIn = async (req, res) => {
  try {
    const payload = await AuthService.signIn(req.body);

    res.json(payload);

  } catch(err) {
    res.json({
      error: 'ERR_NOT_FOUND',
      message: err.message,
    })
  }
}

export default {
  signIn,
}