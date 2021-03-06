import { take, race } from "redux-saga/effects";
import { GREET, IGreetAction } from "./actions/greets";
import { delay } from "redux-saga";
import * as colors from 'colors/safe'

const logStatus = (greets: string[]) => {
	console.log(colors.dim(`Greets recieved so far:`))
	if (greets.length === 0) {
		console.log(colors.red("None"))
	} else {
		for (const greet of greets) {
			console.log(colors.green(" * ") + greet)
		}
	}
}

export const greetingLoop = function*() {
	// Our state
	let greets: string[] = []

	while (true) {
		// Listen for new greets, or timeout to show status.
		// This is done by `yield`ing to the Redux Saga framework
		const action: {greet: IGreetAction, timeout: any} = yield race({
				greet: take(GREET),
				timeout: delay(2000)
			})
		if (action.greet) {
			// We received a new greeting!  Add it to the list:
			greets.push(action.greet.payload.greeting)
		} else {
			// Timeout.  Display the list of greets received so far.
			logStatus(greets)
		}
	}

	// Note: Only `take` an action type directly if you are sure you are ready when it is dispatched, otherwise use a saga `channel` to buffer.
}