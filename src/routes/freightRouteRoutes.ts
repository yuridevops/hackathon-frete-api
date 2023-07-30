import { Router } from 'express'
import { FreightRouteController } from '../controllers/freightRouteController'

const freightRouteRoutes = Router()
const freightRouteController = new FreightRouteController()

freightRouteRoutes.get('/trucker/:id', freightRouteController.getRoutes)
freightRouteRoutes.post('/trucker/:id', freightRouteController.addRoute)
freightRouteRoutes.post('/trucker/:id/receive', freightRouteController.receive)

export { freightRouteRoutes }
