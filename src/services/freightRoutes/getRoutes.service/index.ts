import { getRepository } from 'typeorm'
import errors from '../../../errors/errors.json'
import { getRoutesServiceParams } from './types'
import freight_route from '../../../entities/FreightRoute'

export class GetRoutesService {
  async execute({ personId }: getRoutesServiceParams) {
    try {
      const freightRouteRepository = getRepository(freight_route)

      const freightRouteListQuery = freightRouteRepository
        .createQueryBuilder('f')
        .where('p.id = :personId', { personId: personId })
        .innerJoinAndSelect('f.person', 'p')

      const freightRoutes = await freightRouteListQuery.getMany()
      const { advancedTotal, receivedTotal } = freightRoutes.reduce(
        (total, actual) => {
          let advancedTotal =
            total.advancedTotal + Number(actual.advance_amount)
          let receivedTotal = total.receivedTotal

          if (actual.received) {
            advancedTotal += Number(actual.received_amount)
          } else {
            receivedTotal += Number(actual.received_amount)
          }

          return {
            advancedTotal: advancedTotal,
            receivedTotal: receivedTotal,
          }
        },
        {
          advancedTotal: 0,
          receivedTotal: 0,
        }
      )

      const results = {
        routes: freightRoutes,
        advancedTotal,
        receivedTotal,
      }

      return results
    } catch (err) {
      const error = errors[err?.message] ?? errors.default

      throw error
    }
  }
}
