import { Op } from 'sequelize'
import { Film, Director, Inventory } from '../models'
import { NotFoundError } from '../handlers/errors'

const list = async () => Film.findAll({
  include: [
    { model: Director, as :'director' },
    { model: Inventory, as :'inventory' },
  ],
  attributes: {
    exclude: ['director_id']
  }
});

const create = async data => Film.create({
  ...data,
  ...data.inventory && 
    { amount: data.inventory.amount} || 
    { inventory: {
      amount: 0
    }
  }
}, {
  attributes: {
    exclude: ['director_id'],
  },
  include: [
    { model: Director, as :'director' },
    { model: Inventory, as: 'inventory' },
  ],
});

const update = async (id, data) => {
  const film = await find(id);

  const updatedFilm = await film.update({ 
    ...data 
  }, {
    include: [
      { model: Director, as: 'director' },
      { model: Inventory, as: 'inventory' },
    ]
  });

  return updatedFilm;
};

const find = async id => {
  const film = await Film.findByPk(id, {
    include: { all: true }
  })
  if(!film) throw new NotFoundError('Film not found');

  return film;
};

const findByTitle = async ({ title }) => {
  return Film.findOne({
    include: [
      { model: Director, as :'director' },
    ],
    attributes: {
      exclude: ['director_id'],
    },
    where: {
      title: {
        [Op.like]: `%${title}%`
      }
    },
  })
}

const destroy = async ({ id }) => {
  const film = await find(id);

  await film.destroy();
}

const addToInventory = async (filmId, { amount }) => {
  const film = await find(filmId);
  const inventory = await film.getInventory();

  await inventory.update({
    amount: inventory.get('amount') + amount,
  });

  return inventory.getFilm({
    include: { all: true }
  });
}

export default {
  list,
  create,
  update,
  addToInventory,
  find,
  findByTitle,
  destroy,
}