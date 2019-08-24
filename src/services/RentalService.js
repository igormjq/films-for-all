import { Rental } from '../models'

const build = async () => {
  return Rental.build({
    rental_date: new Date()
  });
}

const list = async () => Rental.findAll()

export default {
  build,
  list,
}