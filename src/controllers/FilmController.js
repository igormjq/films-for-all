import FilmService from '../services/FilmService'

const list = async (req, res) => {
  const data =  await FilmService.list();

  res.json({ data });
}

export default {
  list,
}