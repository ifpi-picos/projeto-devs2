const express = require('express')
const router = express.Router()
const { imovel } = require('../models')

router.get('/', async(req, res) => {
    const imoveis = await imovel.findAll()
    res.json(imoveis)
})

router.post('/', async(req, res) => {
    const { cidade, bairro, valorAluguel, quantInquilinos, telefone } = req.body
    await imovel.create({ cidade, bairro, valorAluguel, quantInquilinos, telefone })
    res.send('Imóvel adicionado com sucesso!')
})

module.exports = router