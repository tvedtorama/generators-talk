import * as express from 'express'
import { Store } from 'redux';
import { IGreetAction } from './actions/greets';

interface IBody {
	greeting: string
}

export const createRouter = (store: Store) => {
	const router = express.Router()

	const apiUrlPath = "/greeting"

	router.post(apiUrlPath, (req, res) => {
		const {body: {greeting}}: {body: IBody} = req

		// Send the message to redux, where `mainLoop` is listening
		store.dispatch(<IGreetAction>{type: "GREET", payload: {greeting}})
		res.sendStatus(200);
	})
	return router
}