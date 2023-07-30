import { Request, Response } from 'express'
import { GetScoreService } from '../services/serasa/getScore.service'

export class SerasaController {
  async getScore(request: Request, response: Response) {
    const { cpf } = request.body

    try {
      if (!cpf) {
        return response.status(422).json({ message: '[cpf] is missing' })
      }

      const getScoreService = new GetScoreService()
      const result = await getScoreService.execute({ cpf })

      return response.json(result)
    } catch (err) {
      const { status, message } = err

      return response.status(status).json({ message })
    }
  }
}
