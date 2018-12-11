import * as express from 'express'
import { Store } from 'redux';

interface IBody {
	greeting: string
}

export const createRouter = (store: Store) => {
	const router = express.Router()

	const apiUrlPath = "/greeting"

	router.post(apiUrlPath, (req, res) => {
		const {body}: {body: IBody} = req
		console.log(body.greeting)
		res.sendStatus(200);
	})
	return router
}