import { Request, Response, Router } from 'express'
import { serasaRoutes } from './serasaRoutes'
import { freightRoutes } from './freightRoutes'
import { freightRouteRoutes } from './freightRouteRoutes'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello Hackathon' })
})

router.use('/serasa', serasaRoutes)
router.use('/freight', freightRoutes)
router.use('/freight-route', freightRouteRoutes)

export { router }
