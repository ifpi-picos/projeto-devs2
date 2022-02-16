const usuario = (sequelize, DataTypes ) => {
  const Usuario = sequelize.define('Usuario', {
    nomeCompleto: {
      type: DataTypes.STRING
    },
    telefone: {
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING
    },
    senha: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'usuario'
  })

  return Usuario
}

module.exports = usuario
