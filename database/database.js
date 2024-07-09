require('dotenv').config()
const { Sequelize } = require('@sequelize/core')
const { PostgresDialect } = require('@sequelize/postgres')

const connection = new Sequelize({
    dialect: PostgresDialect,
    database: process.env.DB_NAME,
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DB_PORT,
})

module.exports = connection