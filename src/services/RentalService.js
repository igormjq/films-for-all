import { Rental } from '../models'
import db from '../models'
import FilmService from './FilmService'

const build = async () => {
  return Rental.build({
    rental_date: new Date()
  });
}

const list = async () => Rental.findAll({ include: { all: true }})
const findById = async id => Rental.findByPk(id, { include: { all: true }});

const rentFilm = async (filmId, user) => {
  let result = await db.sequelize.transaction(async t => {
    const film = await FilmService.findById(filmId);
    const { isAvailable, inventory } = await FilmService.checkInventory(film);

    if(!isAvailable) throw new BadRequestError('Não há cópias disponíveis deste filme em estoque');

    const rentedFilm = await inventory.update({
      rented: inventory.get('rented') + 1,
    }, { transaction: t, lock: true });

    const rental = await build();

    await rental.setFilmInventory(rentedFilm, { transaction: t, lock: true });
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