import { Op } from 'sequelize'
import { Film, Director, Inventory } from '../models'
import db from '../models'
import { NotFoundError, BadRequestError } from '../handlers/errors'
import RentalService from '../services/RentalService'

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

const rentFilm = async (filmId, user) => {
  try {
    let result = await db.sequelize.transaction(async t => {
      const film = await findById(filmId);
      const { isAvailable, inventory } = await checkInventory(film);

      if(!isAvailable) throw new BadRequestError('Não há cópias disponíveis deste filme em estoque');

      const rentedFilm = await inventory.update({
        rented: inventory.get('rented') + 1,
      }, { transaction: t });

      const rental = await RentalService.build();

      await rental.setFilmInventory(rentedFilm, { transaction: t });
      await rental.setCustomer(user, { transaction: t });

      return rental.save({ transaction: t });
    });
    
    return findById(filmId);

  } catch(err) {
    throw err;
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
  rentFilm,
}