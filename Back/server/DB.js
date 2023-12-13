const { Sequelize } = require('sequelize');
const UserModel = require('./user');
const MessageModel = require('./message');

const sequelize = new Sequelize({
  // Configuración de conexión a la base de datos
  dialect: 'postgres',
  username: 'postgres',
  password: 'yo4457942',
  database: 'rapi_chat',
  host: 'localhost',
});

const User = UserModel(sequelize);
const Message = MessageModel(sequelize);

// Definir asociaciones aquí si es necesario

module.exports = {
  sequelize,
  User,
  Message,
};