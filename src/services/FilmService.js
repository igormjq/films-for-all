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
  if(!film) throw new NotFoundError('Film not found');

  return film;
};

const findAvailable = async () => Film.findAll({
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

const addToInventory = async (filmId, { amount }) => {
  const film = await findById(filmId);

  await inventory.update({
    copies: film.get('copies') + amount,
  });

  return film;
}

const checkInventory = async film => film.get('available') > 0

export default {
  list,
  create,
  update,
  addToInventory,
  findById,
  findAvailable,
  findByTitle,
  destroy,
  checkInventory,
}