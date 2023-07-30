import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { initServer } from './server'

createConnection()
  .then(async () => {
    console.log('Database connection stablished with success')
    initServer()
  })
  .catch((error) => console.log(error))
