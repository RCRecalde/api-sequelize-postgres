import {Router} from 'express'
const  router =  Router()
import {getProjects, createProject, editProject, deleteProject, getProject, getProjectTasks} from '../controllers/projects.controller.js'


router.get('/projects', getProjects)
router.post('/projects', createProject)
router.put('/projects/:id', editProject)
router.delete('/projects/:id', deleteProject)
router.get('/projects/:id', getProject)

//muestra solo las tareas de un projecto
router.get('/projects/:id/tasks', getProjectTasks)


export default router