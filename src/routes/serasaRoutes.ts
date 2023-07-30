import { Router } from 'express'
import { SerasaController } from '../controllers/serasaController'

const serasaRoutes = Router()
const serasaController = new SerasaController()

serasaRoutes.post('/consult-cpf', serasaController.getScore)

export { serasaRoutes }
