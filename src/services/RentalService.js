import { Rental } from '../models'
import FilmService from './FilmService'

const build = async filmId => {
  return Rental.build({
    rental_date: new Date()
  });
}

const list = async () => Rental.findAll()

export default {
  build,
  list,
}