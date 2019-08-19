import FilmService from '../services/FilmService'

const list = async (req, res) => {
  const data =  await FilmService.list();

  res.json({ data });
}

const findByTitle = async (req, res) => {
  const data = await FilmService.findByTitle(req.params);

  res.json({ data });
}

export default {
  list,
  findByTitle,
}