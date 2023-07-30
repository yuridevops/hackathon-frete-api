import { getScoreParams } from './types'
import serasadata from '../../../data/serasa.json'
import errors from '../../../errors/errors.json'

export class GetScoreService {
  async execute({ cpf }: getScoreParams) {
    try {
      //SIMULAÇÃO DE CONSULTA AO SERASA
      const consult = serasadata.find((person) => person.cpf === cpf)

      if (!consult) {
        throw new Error('cpf_not_found')
      }

      return consult
    } catch (err) {
      const error = errors[err.message] ?? errors.default

      throw error
    }
  }
}
