import {Router} from 'express'
const  router =  Router()
import {getProjects, cerateProject} from '../controllers/projects.controller.js'


router.get('/projects', getProjects)
router.post('/projects', cerateProject)
router.put('/projects/:id')
router.delete('/projects/:id')
router.get('/projects/:id')



export default router