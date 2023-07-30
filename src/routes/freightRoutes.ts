import { Router } from 'express'
import { FreightController } from '../controllers/freightController'

const freightRoutes = Router()
const freightController = new FreightController()

freightRoutes.get('/list', freightController.listFreights)
freightRoutes.get('/trucker/:id', freightController.listFreightsByPerson)
freightRoutes.get('/trucker/:id/score', freightController.getFreightWithScore)

export { freightRoutes }
