import {createStore, applyMiddleware, compose} from 'redux'
import {createReducer} from './reducers'
import {createExecute} from 'redux-execute'
import {routerMiddleware} from 'connected-react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // options like actionSanitizer, stateSanitizer
    })
    : compose

export function configureStore({history, initialState = {}} = {}) {
    const middlewares = [createExecute({log: Boolean(process.env.REACT_APP_STORE_LOG)}), routerMiddleware(history)]

    const store = createStore(createReducer(history), initialState, composeEnhancers(applyMiddleware(...middlewares)))

    return store
}