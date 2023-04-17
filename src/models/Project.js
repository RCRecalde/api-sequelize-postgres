import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'
import {Task} from './Task.js'

export const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type:DataTypes.STRING
    },
    priority: {
        type:DataTypes.INTEGER
    },
    description: {
        type:DataTypes.STRING
    }
}, {
    timestamps:true
}
);


//muchas tareas pertenecen a un projecto
Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
})

//una tarea le pertenece a un projecto
Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id'
})