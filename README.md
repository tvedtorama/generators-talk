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

### Passing Values to the Generator

```typescript
const communicative = function*() {
	let value = 99
	while (true) {
		value = yield value + 10
	}
}

	const gen = communicative()

	for (const i of Iterable.range(0, 4)) {
		const {value, done} = gen.next(i)
		console.log(`Got value: ${value} done: ${done}`)
	}
```

**Issue** Note the inconsitency in the first iteration.
**Issue** Mutable state

### Recursive

```typescript

const recursive = function*(seed = 10) {
	yield seed
	yield* recursive(seed + 1)
}

```

### Spreading into array

```typescript
const finite = function*(seed = 10) {
	yield seed
	if (seed < 12) {
		yield* finite(seed + 1)
	}
}

	const gen = finite()

	const arr = [...gen]
	console.log(arr)
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


