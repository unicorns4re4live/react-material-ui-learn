import {createSymbiote} from 'redux-symbiote'
import {initialFetching, createFetching} from 'symbiote-fetching'

export const initialState = {
    fetchData: initialFetching,
    projects: null,
    technologies: null,
}

const symbiote = {
    fetchData: createFetching('fetchData'),
    setProjects: (state, data) => ({...state, projects: data}),
    setTechnologies: (state, data) => ({...state, technologies: data}),
}

export const {actions, reducer} = createSymbiote(initialState, symbiote, 'main')