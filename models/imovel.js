const imovel = (sequelize, DataTypes) => {
  const Imovel = sequelize.define('Imovel', {
    cidade: {
      type: DataTypes.STRING
    },
    bairro: {
      type: DataTypes.STRING
    },
    valorAluguel: {
      type: DataTypes.FLOAT
    },
    quantInquilinos: {
      type: DataTypes.INTEGER
    },
    telefone: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'imovel'
  })

  return Imovel
}

module.exports = imovel
