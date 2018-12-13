import { listen } from "./listen";
import { setupShop } from "./createStore";
import { createRouter } from "./routing";
import { greetingLoop } from "./greetingLoop";
import {Iterable} from 'ix'

const gloriousStateful = function*(seed = 10) {
	let state = seed

	while (true) {
		yield ++state
	}
}


export default () => {

	const gen = gloriousStateful()

	for (const i of Iterable.range(0, 4)) {
		const {value, done} = gen.next()
		console.log(`Got value: ${value} done: ${done}`)
	}
}
