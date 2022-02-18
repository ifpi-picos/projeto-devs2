const { application } = require('express')
const express = require('express')
const app = express()
const imoveisRouter = require('./imoveis')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
    res.send('App Online!')
})

router.use('/imoveis', imoveisRouter)

module.exports = router