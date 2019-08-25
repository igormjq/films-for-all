import { Op } from 'sequelize'
import { Film, Director, Inventory } from '../models'
import { NotFoundError } from '../handlers/errors'

const list = async () => Film.scope('complete').findAll();

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
  const film = await findById(id);

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

const findById = async id => {
  const film = await Film.scope('complete').findByPk(id)
  if(!film) throw new NotFoundError('Film not found');

  return film;
};

const findAvailable = async () => Film.findAll({
  include: [
    { 
      model: Inventory, 
      as: 'inventory',
      where: {
        available: {
          [Op.gt]: 0,
        }
      }
    },
    { all: true },
  ]
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
  const inventory = await film.getInventory();

  await inventory.update({
    amount: inventory.get('amount') + amount,
  });

  return inventory.getFilm({
    include: { all: true }
  });
}

const checkInventory = async film => {
  const inventory = await film.getInventory();

  return {
    isAvailable: inventory.get('available') > 0,
    inventory,
  }
}

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