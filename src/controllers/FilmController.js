import FilmService from '../services/FilmService'

const list = async (req, res) => {
  const data =  await FilmService.list();

  res.json({ data });
}

const create = async (req, res) => {
  const data = await FilmService.create(req.body);

  return res.status(201).json({ data });
}

const update = async (req, res) => {
  const data = await FilmService.update(req.params.id, req.body);

  res.json({ data });
}

const findByTitle = async (req, res) => {
  const data = await FilmService.findByTitle(req.params);

  res.json({ data });
}

const destroy = async (req, res) => {
  await FilmService.destroy(req.params);

  res.sendStatus(204);
}

export default {
  list,
  create,
  update,
  findByTitle,
  destroy,
}