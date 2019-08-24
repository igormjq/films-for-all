import RentalService from '../services/RentalService'

const list = async (req, res) => {
  const data =  await RentalService.list();

  res.json({ data });
}

export default {
  list,
}