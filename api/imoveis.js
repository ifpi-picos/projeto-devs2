const express = require('express')
const router = express.Router()

const listaImoveis = []

router.get('/', (req, res) => {
  res.json(listaImoveis)
})

router.post('/', (req, res) => {
  const dadosImoveis = req.body
  console.log(dadosImoveis)
  listaImoveis.push(dadosImoveis)
  res.send('Imóvel cadastrado com sucesso!')
})

module.exports = router
