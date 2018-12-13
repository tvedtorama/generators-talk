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

### Spreading finite gen into array

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

### Iterating in for loop

```typescript
	const gen = finite()

	for (const val of gen) {
		console.log(val)
	}
```

### Using Ixjs to Achieving Gloriousness

```typescript
	const gen = finite()
	const iter = Iterable.from(gen)

	for (const val of iter.filter(x => x > 10).take(1)) {
		console.log(val)
	}

	// Tip: add a log statement to the inner loop of `finite` to see how many times it actually runs.
```

### init.ts - Sagas and Listen

```typescript
	const {store, sagaMiddleware} = setupShop()
	sagaMiddleware.run(greetingLoop)
	const router = createRouter(store)

	listen(app => {
		app.use("/", router)
	})

	// Look at `greetingLoop` for the actual content.
```
