const express = require('express')
const router = express.Router()

const listaImoveis = []

router.get('/', (req, res) => {
  res.json(listaImoveis)
})

router.post('/', (req, res) => {
  const dadosImovel = req.body
  console.log(dadosImovel)
  listaImoveis.push(dadosImovel)
  res.send('Imóvel adicionado com sucesso!')
})

module.exports = router
