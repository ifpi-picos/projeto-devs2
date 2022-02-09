const express = require('express')
const router = express.Router()

const listaUsuarios = []

router.get('/', (req, res) => {
  res.json(listaUsuarios)
})

router.post('/', (req, res) => {
  const dadosUsuario = req.body
  console.log(dadosUsuario)
  listaUsuarios.push(dadosUsuario)
  res.send('Usuário adicionado com sucesso!')
})

module.exports = router
