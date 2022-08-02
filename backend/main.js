import express from 'express'
import cors from 'cors'
import nnnRouter from 'nnn-router'
import bodyParser from 'body-parser'
import promiseRouter from 'express-promise-router'
import camelcaseKeys from 'camelcase-keys'
import statuses from 'statuses'

const app = express()

express.response.success = function (responseData) {
  this.send(camelcaseKeys(responseData, { deep: true }))
}

// Customize express response
express.response.sendStatus = function (statusCode, message = null) {
  const body = {
    message: message || statuses(statusCode) || String(statusCode),
  }
  this.statusCode = statusCode
  this.type('json')
  this.send(body)
}

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))

app.use(
  cors({
    origin: true,
    credential: true,
    exposedHeaders: ['X-Total-Count']
  }),
  (error, req, res, next) => {
    if (error) {
      return res.status(400).json({
        message: error.message
      })
    }
    next()
  }
)

app.use(
  nnnRouter({ routeDir: '/routes', baseRouter: promiseRouter() })
)

app.listen(process.env.PORT || 8000, err => {
  if (err) {
    return console.error(err)
  }
  console.log(`Listening on port ${process.env.PORT || 8000}`)
})

export default app
