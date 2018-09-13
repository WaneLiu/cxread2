import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducers from '../reducers/indexReducer'

const middlewares = [thunk, createLogger()]

const storeEnhancer = compose(applyMiddleware(...middlewares))

export default createStore(rootReducers, {}, storeEnhancer)