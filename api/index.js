const express = require('express')

const usuariosRouter = require('./usuarios')
const imoveisRouter = require('./imoveis')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('App Online!')
})

router.use('/usuarios', usuariosRouter)
router.use('/imoveis', imoveisRouter)

module.exports = router
