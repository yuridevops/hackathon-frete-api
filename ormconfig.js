module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities:
    process.env.NODE_ENV === 'development'
      ? ['src/entities/*.ts']
      : ['dist/src/entities/*.js'],
  migrations:
    process.env.NODE_ENV === 'development'
      ? ['src/migrations/*.ts']
      : ['dist/src/migrations/*.js'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
}
