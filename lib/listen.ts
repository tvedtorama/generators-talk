import * as express from 'express'
import {Express} from 'express'
import * as bodyParser from 'body-parser'

export const listen = (setup: ((app: Express) => void)) => {
	const app = express()

	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(bodyParser.json())

	setup(app)

	const port = process.env["PORT"] || 3000

	app.listen(port)
	console.log(`Listening on port ${port}`)
	return app
}