import { getRepository } from 'typeorm'
import errors from '../../../errors/errors.json'
import freight_route from '../../../entities/FreightRoute'
import { receiveAmountServiceParams } from './types'

export class ReceiveAmountService {
  async execute(params: receiveAmountServiceParams) {
    try {
      const freightRouteRepository = getRepository(freight_route)

      const updateResult = await freightRouteRepository.update(
        { person_id: params.personId, id: params.route },

        { received: true }
      )

      return updateResult
    } catch (err) {
      console.log(err)
      const error = errors[err?.message] ?? errors.default

      throw error
    }
  }
}
