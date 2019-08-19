import { Op } from 'sequelize'
import { Film, Director } from '../models'

const create = async ({ title, director_id }) => Film.create({
  title,
  director_id,
});

const list = async () => Film.findAll({
  include: [ Director ],
  attributes: {
    exclude: ['director_id']
  }
});

const find = async id => Film.findByPk(id);

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
  create,
  list,
  find,
  findByTitle,
}