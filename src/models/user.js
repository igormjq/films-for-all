import bcrypt from 'bcryptjs'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Invalid e-mail. Please insert a valid one'
        }
      }
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      async beforeCreate(user) {
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  });
  
  User.associate = function(models) {};

  User.prototype.passwordMatches = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
};