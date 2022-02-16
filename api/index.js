const express = require('express')

const imoveisRouter = require('./imoveis')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('App Online!')
})

router.use('/imoveis', imoveisRouter)

module.exports = router
