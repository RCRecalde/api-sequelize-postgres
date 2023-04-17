import * as dotenv from 'dotenv'
dotenv.config()
import Sequelize from 'sequelize'

export const sequelize = new Sequelize('projectdb', 'postgres', process.env.DB_PASS, {
    host:'localhost',
    dialect: 'postgres'
})