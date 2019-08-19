import { Op } from 'sequelize'
import { Film, Director } from '../models'
import { NotFoundError } from '../handlers/errors'

const list = async () => Film.findAll({
  include: [ Director ],
  attributes: {
    exclude: ['director_id']
  }
});

const create = async ({ title, director_id }) => Film.create({
  title,
  director_id,
});

const update = async (id, data) => {
  const film = await find(id);

  return film.update({ ...data });
};

const find = async id => {
  const film = await Film.findByPk(id);
  if(!film) throw new NotFoundError('Film not found');

  return film;
};

const findByTitle = async ({ title }) => {
  return Film.findOne({
    include: [ Director ],
    attributes: {
      exclude: ['director_id'],
    },
    where: {
      title: {
        [Op.like]: `%${title}%`
      }
    },
  })
}

export default {
  list,
  create,
  update,
  find,
  findByTitle,
}