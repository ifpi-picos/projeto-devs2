const express = require('express')
const router = express.Router()
const { usuario } = require('../models')

router.get('/', async (req, res) => {
  const usuarios = await usuario.findAll()
  res.json(usuarios)
})

router.post('/', async (req, res) => {
  const { nomeCompleto, telefone, email, senha } = req.body
  await usuario.create({ nomeCompleto, telefone, email, senha })
  res.send('Usuário adicionado com sucesso!')
})

module.exports = router
