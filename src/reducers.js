import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import {reducer as main} from './main'

export const createReducer = historyRouter =>
    combineReducers({
        router: connectRouter(historyRouter),
        main
    })