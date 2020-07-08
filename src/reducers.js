import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

export const createReducer = historyRouter =>
    combineReducers({
        router: connectRouter(historyRouter),
    })