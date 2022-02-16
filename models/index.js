const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Imovel = require('./imovel')
const Usuario = require('./usuario')

const imovel = Imovel(sequelize, Sequelize.DataTypes)
const usuario = Usuario(sequelize, Sequelize.DataTypes)

const db = {
  imovel,
  usuario,
  sequelize
}

module.exports = db
