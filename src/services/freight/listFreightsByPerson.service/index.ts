import { getRepository } from 'typeorm'
import errors from '../../../errors/errors.json'
import freight_register from '../../../entities/Freight'
import { listFreightsByPersonParams } from './types'

export class ListFreightsByPersonService {
  async execute({ personId }: listFreightsByPersonParams) {
    try {
      const freightRepository = getRepository(freight_register)

      const freightList = await freightRepository.find({ person_id: personId })

      return freightList
    } catch (err) {
      const error = errors[err?.message] ?? errors.default

      throw error
    }
  }
}
