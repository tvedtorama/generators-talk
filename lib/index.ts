import { listen } from "./listen";
import { setupShop } from "./createStore";
import { createRouter } from "./routing";

export default () => {
	console.log("hello")

	const store = setupShop()
	const router = createRouter(store)

	listen(app => {
		app.use("/", router)
	})
}
