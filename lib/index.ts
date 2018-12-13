import { listen } from "./listen";
import { setupShop } from "./createStore";
import { createRouter } from "./routing";
import { greetingLoop } from "./greetingLoop";

export default () => {
	console.log("hello")

	const {store, sagaMiddleware} = setupShop()
	sagaMiddleware.run(greetingLoop)
	const router = createRouter(store)

	listen(app => {
		app.use("/", router)
	})
}
