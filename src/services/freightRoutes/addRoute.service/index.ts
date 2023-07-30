import { getRepository } from 'typeorm'
import errors from '../../../errors/errors.json'
import { addRouteServiceParams } from './types'
import freight_route from '../../../entities/FreightRoute'

export class AddRouteService {
  async execute(params: addRouteServiceParams) {
    try {
      const freightRouteRepository = getRepository(freight_route)

      const freightRoute = await freightRouteRepository.save(
        freightRouteRepository.create(params)
      )

      return freightRoute
    } catch (err) {
      console.log(err)
      const error = errors[err?.message] ?? errors.default

      throw error
    }
  }
}
