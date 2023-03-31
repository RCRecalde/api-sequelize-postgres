import * as dotenv from 'dotenv'
dotenv.config()
import Sequelize from 'sequelize'

export const sequelize = new Sequelize('projectsdb', 'postgres', process.env.DB_PASS, {
    host:'localhost',
    dialect: 'postgres'
})