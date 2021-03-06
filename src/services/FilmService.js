import { Op } from 'sequelize'
import { Film, Director, Inventory } from '../models'
import { NotFoundError } from '../handlers/errors'

const list = async () => Film.scope('complete').findAll();

const create = async data => Film.create({
  ...data,
}, {
  include: [
    { model: Director, as :'director' },
  ],
});

const update = async (id, data) => {
  const film = await findById(id);

  const updatedFilm = await film.update({ 
    ...data 
  }, {
    include: [
      { model: Director, as: 'director' },
    ]
  });

  return updatedFilm;
};

const findById = async id => {
  const film = await Film.scope('complete').findByPk(id)
  if(!film) throw new NotFoundError('Filme não encontrado');

  return film;
};

const findAvailable = async () => Film.scope('complete').findAll({
  where: {
    available: {
      [Op.gt]: 0,
    }
  }
});

const findByTitle = async ({ title }) => {
  return Film.scope('complete').findOne({
    where: {
      title: {
        [Op.like]: `%${title}%`
      }
    },
  })
}

const destroy = async ({ id }) => {
  const film = await findById(id);

  await film.destroy();
}

const addCopyToInventory = async (filmId, { amount }) => {
  const film = await findById(filmId);

  await film.update({
    copies: film.get('copies') + amount,
  });

  return film;
}

const rentUnity = async (film, options) => {
  return film.update({
    rented: film.get('rented') + 1,
  }, { ...options });
}

const returnUnity = async (film, options) => {
  return film.update({
    rented: film.get('rented') - 1,
  }, { ...options })
}

const checkInventory = async film => film.get('available') > 0

export default {
  list,
  create,
  update,
  addCopyToInventory,
  findById,
  findAvailable,
  findByTitle,
  destroy,
  checkInventory,
  rentUnity,
  returnUnity,
}