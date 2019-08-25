import { Rental } from '../models'
import db from '../models'
import FilmService from './FilmService'
import { BadRequestError } from '../handlers/errors'

const build = async () => {
  return Rental.build({
    rental_date: new Date()
  });
}

const list = async () => Rental.scope('withCustomerAndFilm').findAll();

const findById = async id => Rental.scope('withCustomerAndFilm').findByPk(id);

const rentFilm = async (filmId, user) => {
  let result = await db.sequelize.transaction(async t => {
    const film = await FilmService.findById(filmId);
    const isAvailable = await FilmService.checkInventory(film);

    if(!isAvailable) throw new BadRequestError('Não há cópias disponíveis deste filme em estoque');

    const rentedFilm = await film.update({
      rented: film.get('rented') + 1,
    }, { transaction: t, lock: true });

    const rental = await build();

    await rental.setFilm(rentedFilm, { transaction: t, lock: true });
    await rental.setCustomer(user, { transaction: t, lock: true });

    return rental.save({ transaction: t });
  });
  
  return findById(result.id);

}

export default {
  list,
  findById,
  rentFilm,
}