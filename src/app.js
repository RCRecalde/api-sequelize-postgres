//config express
import express from "express";
import projectsRoutes from './routes/project.routes.js'
import tasksRoutes from './routes/task.routes.js'

const app = express();
//middlewares
app.use(express.json())

app.use(projectsRoutes)
app.use(tasksRoutes)


export default app;