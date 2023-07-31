import { getRepository } from 'typeorm'
import errors from '../../../errors/errors.json'
import freight_register from '../../../entities/Freight'

export class ListFreightsService {
  async execute() {
    try {
      const freightRepository = getRepository(freight_register)

      const freightList = await freightRepository.find()

      return freightList
    } catch (err) {
      const error = errors[err.message] ?? errors.default

      throw error
    }
  }
}
