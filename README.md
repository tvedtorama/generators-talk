# Talk on Generators

Useful ideas on generators

### Prerequisites

Global installation of Typescript, with `tsc` command.

### Build and Run

```
npm install
npm start
```

### CURLing Greets

```
curl -X POST http://127.0.0.1:5555/greeting --data '{"greeting":"Heisann"}' --header "Content-Type: application/json" -w "\n"
```

## Elements of the Talk


### Generic iteration
```typescript 

const gloriousStateful = function*(seed = 10) {
	let state = seed

	while (true) {
		yield ++state
	}
}

	// Using it
	const gen = gloriousStateful()

	for (const i of Iterable.range(0, 4)) {
		const {value, done} = gen.next()
		console.log(`Got value: ${value} done: ${done}`)
	}

```

### init.ts - Sagas and Listen

```typescript
	const {store, sagaMiddleware} = setupShop()
	sagaMiddleware.run(greetingLoop)
	const router = createRouter(store)

	listen(app => {
		app.use("/", router)
	})
```


