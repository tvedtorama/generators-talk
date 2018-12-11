import {createStore, applyMiddleware} from 'redux'
import {default as createSagaMiddleware} from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

export const setupShop = () =>
	createStore((s = {}) => s,
		applyMiddleware(sagaMiddleware))
