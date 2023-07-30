import { Request, Response } from 'express'
import { ListFreightsService } from '../services/freight/listFreights.service'
import { ListFreightsByPersonService } from '../services/freight/listFreightsByPerson.service'
import { GetFreightWithScoreService } from '../services/freight/getFreightWithScore.service'

export class FreightController {
  async listFreights(request: Request, response: Response) {
    try {
      const listFreightsService = new ListFreightsService()
      const result = await listFreightsService.execute()

      return response.json(result)
    } catch (err) {
      const { status, message } = err

      return response.status(status).json({ message })
    }
  }

  async listFreightsByPerson(request: Request, response: Response) {
    const { id: personId } = request.params
    try {
      if (!personId) {
        return response.status(422).json({ message: '[personId] is missing' })
      }

      const listFreightsByPersonService = new ListFreightsByPersonService()
      const result = await listFreightsByPersonService.execute({
        personId: Number(personId),
      })

      return response.json(result)
    } catch (err) {
      const { status, message } = err

      return response.status(status).json({ message })
    }
  }

  async getFreightWithScore(request: Request, response: Response) {
    const { id: personId } = request.params
    try {
      if (!personId) {
        return response.status(422).json({ message: '[personId] is missing' })
      }

      const getFreightWithScoreService = new GetFreightWithScoreService()
      const result = await getFreightWithScoreService.execute({
        personId: Number(personId),
      })

      return response.json(result)
    } catch (err) {
      const { status, message } = err

      return response.status(status).json({ message })
    }
  }
}
