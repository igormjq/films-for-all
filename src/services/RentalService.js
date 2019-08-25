import { Rental } from '../models'
import db from '../models'
import FilmService from './FilmService'
import { BadRequestError } from '../handlers/errors'

const build = async (film, customer, t) => {
  const rental = await Rental.build({
    rental_date: new Date()
  });

  await rental.setFilm(film, { transaction: t, lock: true });
  await rental.setCustomer(customer, { transaction: t, lock: true });

  return rental;
}

const list = async () => Rental.scope('withCustomerAndFilm').findAll();

const findById = async id => Rental.scope('withCustomerAndFilm').findByPk(id);

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

    console.log('rentalll', rental);


  })
}

export default {
  list,
  findById,
  rentFilm,
  returnRentedFilm,
}