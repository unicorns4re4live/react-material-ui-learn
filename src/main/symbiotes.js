import {createSymbiote} from 'redux-symbiote'
import {initialFetching, createFetching} from 'symbiote-fetching'

export const initialState = {
    fetchProjects: initialFetching,
    projects: null,
}

const symbiote = {
    fetchProjects: createFetching('fetchProjects'),
    setProjects: (state, data) => ({...state, projects: data}),
}

export const {actions, reducer} = createSymbiote(initialState, symbiote, 'main')