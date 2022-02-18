const express = require('express')
const routers = require('../api')
const cors = require('cors')
const { sequelize } = require('../models')

const app = express()
app.use(express.json())

app.use(cors())
app.use(express.json())
app.use('/', routers)

sequelize.sync().then(() => {
    console.log('Conectado ao banco de dados!')
})

app.listen(3000, () => {
    console.log('App Online!')
})