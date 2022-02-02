const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Usuários')
})

router.post('/', (req, res) => {
  const dadosUsuarios = req.body
  console.log(dadosUsuarios)
  res.send('Usuário cadastrado com sucesso!')
})

module.exports = router
