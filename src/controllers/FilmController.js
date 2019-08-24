import FilmService from '../services/FilmService'

const list = async (req, res) => {
  const data =  await FilmService.list();

  res.json({ data });
}

const findById = async (req, res) => {
  const data = await FilmService.findById(req.params.id);

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

const findAvailable = async (req, res) => {
  const data = await FilmService.findAvailable();

  return res.json({ data });
}

const findByTitle = async (req, res) => {
  const data = await FilmService.findByTitle(req.params);

  res.json({ data });
}

const destroy = async (req, res) => {
  await FilmService.destroy(req.params);

  res.sendStatus(204);
}

const addToInventory = async (req, res) => {
  const data = await FilmService.addToInventory(req.params.id, req.body);

  res.json({ data });
}

const rentFilm = async (req, res) => {
  const data = await FilmService.rentFilm(req.params.id, req.user);

  res.json({ data });
}

export default {
  list,
  create,
  update,
  findByTitle,
  findById,
  findAvailable,
  destroy,
  addToInventory,
  rentFilm,
}