import { listen } from "./listen";
import { setupShop } from "./createStore";
import { createRouter } from "./routing";
import { mainLoop } from "./mainLoop";

export default () => {
	console.log("hello")

	const {store, sagaMiddleware} = setupShop()
	sagaMiddleware.run(mainLoop)
	const router = createRouter(store)

	listen(app => {
		app.use("/", router)
	})
}
