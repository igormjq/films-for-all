import { Op } from 'sequelize'
import { Film, Director } from '../models'

const create = async ({ title, director_id }) => Film.create({
  title,
  director_id,
});

const list = async () => Film.findAll({
  include: [ Director ],
});

const find = async id => Film.findByPk(id);

const findByName = async name => Film.findOne({
  where: {
    title: {
      [Op.like]: `%${name}%`
    }
  }
})

export default {
  create,
  list,
  find,
  findByName,
}