import FilmService from '../services/FilmService'

const list = async (req, res) => {
  const data =  await FilmService.list();

  res.json({ data });
}

const findByTitle = async (req, res) => {
  const data = await FilmService.findByTitle(req.params);

  res.json({ data });
}

const update = async (req, res) => {
  const data = await FilmService.update(req.params.id, req.body);

  res.json({ data });
}

export default {
  list,
  findByTitle,
  update,
}