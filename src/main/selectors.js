import {createSelector} from 'reselect'

export const mainRootSelector = createSelector(
    root => root.main,
    main => main
)

export const projectsSelector = createSelector(mainRootSelector, main => main.projects)
