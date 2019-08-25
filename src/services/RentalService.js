import { Rental } from '../models'
import db from '../models'
import FilmService from './FilmService'
import { BadRequestError, NotFoundError } from '../handlers/errors'

const build = async (film, customer, t) => {
  const rental = await Rental.build({
    rental_date: new Date()
  });

  await rental.setFilm(film, { transaction: t, lock: true });
  await rental.setCustomer(customer, { transaction: t, lock: true });

  return rental;
}

const list = async () => Rental.scope('withCustomerAndFilm').findAll();

const findById = async id => {
  const rental = await Rental.scope('withCustomerAndFilm').findByPk(id);

  if(!rental) throw new NotFoundError('This rental does not exist');

  return rental;
};

const rentFilm = async (filmId, user) => {
  let result = await db.sequelize.transaction(async t => {
    const film = await FilmService.findById(filmId);
    const isAvailable = await FilmService.checkInventory(film);

    if(!isAvailable) throw new BadRequestError('Não há cópias disponíveis deste filme em estoque');

    const rentedFilm = await FilmService.rentUnity(film, { transaction: t, lock: true });

    const rental = await build(rentedFilm, user, t);

    return rental.save({ transaction: t });
  });
  
  return findById(result.id);
}

const returnRentedFilm = async rentalId => {
  await db.sequelize.transaction(async t => {
    const rental = await findById(rentalId);

    const film = await rental.getFilm();

    await FilmService.returnUnity(film, { transaction: t, lock: true });

    return t;
  });

  return true;
}

export default {
  list,
  findById,
  rentFilm,
  returnRentedFilm,
}