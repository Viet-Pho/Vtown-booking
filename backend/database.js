import knex from 'knex'
import setupPaginator from 'knex-paginator'

let connection = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  charset: 'utf8',
}

const queryBuilder = knex({
  connection,
  client: 'mysql',
})
setupPaginator(queryBuilder)

export default queryBuilder
