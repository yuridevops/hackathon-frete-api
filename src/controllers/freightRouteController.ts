import { Request, Response } from 'express'
import { GetRoutesService } from '../services/freightRoutes/getRoutes.service'
import { AddRouteService } from '../services/freightRoutes/addRoute.service'
import { ReceiveAmountService } from '../services/freightRoutes/receiveAmount.service'

export class FreightRouteController {
  async getRoutes(request: Request, response: Response) {
    const { id } = request.params

    try {
      if (!id) {
        return response.status(422).json({ message: '[id] is missing' })
      }

      const getRoutesService = new GetRoutesService()
      const result = await getRoutesService.execute({ personId: Number(id) })

      return response.json(result)
    } catch (err) {
      const { status, message } = err

      return response.status(status).json({ message })
    }
  }

  async addRoute(request: Request, response: Response) {
    const { id } = request.params
    const {
      negotiated_amount,
      destiny_date,
      origin_date,
      origin,
      destiny,
      received_amount,
      advance_amount,
    } = request.body

    try {
      const addRoute = new AddRouteService()
      const result = await addRoute.execute({
        person_id: Number(id),
        received_amount,
        advance_amount,
        negotiated_amount,
        destiny_date,
        origin_date,
        origin,
        destiny,
      })

      return response.json(result)
    } catch (err) {
      const { status, message } = err

      return response.status(status).json({ message })
    }
  }

  async receive(request: Request, response: Response) {
    const { id } = request.params
    const { route } = request.query

    try {
      const receiveAmountService = new ReceiveAmountService()
      const result = await receiveAmountService.execute({
        personId: Number(id),
        route: Number(route),
      })

      return response.json(result)
    } catch (err) {
      const { status, message } = err

      return response.status(status).json({ message })
    }
  }
}
