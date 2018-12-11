import {createStore, applyMiddleware} from 'redux'
import {default as createSagaMiddleware} from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

export const setupShop = () => ({
	store: createStore((s = {}) => s,
		applyMiddleware(sagaMiddleware)),
	sagaMiddleware
})
