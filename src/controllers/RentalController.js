import RentalService from '../services/RentalService'

const list = async (req, res) => {
  const data =  await RentalService.list();

  res.json({ data });
}


const rentFilm = async (req, res) => {
  const data = await RentalService.rentFilm(req.params.filmId, req.user);

  res.json({ data });
}

const returnRentedFilm = async (req, res) => {
  const data = await RentalService.returnRentedFilm(req.params.rentalId, req.user);

  res.json({ data });
}

export default {
  list,
  rentFilm,
  returnRentedFilm,
}