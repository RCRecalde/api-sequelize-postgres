import {Router} from 'express'
const  router =  Router()
import {createTask ,getTasks, getTask, updateTask, deleteTask} from '../controllers/tasks.controller.js'


router.get('/tasks', getTasks)
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)
router.get('/tasks/:id', getTask)

export default router