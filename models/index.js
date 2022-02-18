const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')

const Imovel = require('./imovel')

const imovel = Imovel(sequelize, Sequelize.DataTypes)

const db = {
  imovel,
  sequelize
}

module.exports = db
