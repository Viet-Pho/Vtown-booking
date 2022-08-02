import knex from '@api/database'
import { isOk } from '@util/index'

export default async (req, res) => {
  const reservation = await knex('reservation').select()
  return res.success({ reservation, message: isOk() })
}
