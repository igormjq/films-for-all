import RentalService from '../services/RentalService'

const list = async (req, res) => {
  const data =  await RentalService.list();

  res.json({ data });
}


const rentFilm = async (req, res) => {
  const data = await RentalService.rentFilm(req.params.id, req.user);

  res.json({ data });
}

export default {
  list,
  rentFilm,
}