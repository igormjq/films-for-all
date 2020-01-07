import { sequelize } from '../src/models/index';

export const refreshDatabase = async () => sequelize.sync();
export const generateTestUser = async () => sequelize.models.User.create({
  email: 'tester@gmail.com',
  password: '123456',
  name: 'Tester',
});