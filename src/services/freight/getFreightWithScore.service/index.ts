import { getRepository } from 'typeorm'
import errors from '../../../errors/errors.json'
import freight_register from '../../../entities/Freight'
import { getFreightWithScore } from './types'
import { GetScoreService } from '../../serasa/getScore.service'

export class GetFreightWithScoreService {
  async execute({ personId }: getFreightWithScore) {
    try {
      const freightRepository = getRepository(freight_register)

      const freightListQuery = freightRepository
        .createQueryBuilder('f')
        .where('p.id = :personId', { personId: personId })
        .innerJoinAndSelect('f.person', 'p')

      const freight = await freightListQuery.getOne()

      if (!freight) {
        throw new Error('freight_not_found')
      }

      const getScoreService = new GetScoreService()
      const serasaResult = await getScoreService.execute({
        cpf: freight.person.cpf,
      })

      delete freight.person
      delete freight.id

      const result = {
        ...freight,
        serasa_score: String(serasaResult.score / 1000),
      }

      return result
    } catch (err) {
      const error = errors[err?.message] ?? errors.default

      throw error
    }
  }
}
