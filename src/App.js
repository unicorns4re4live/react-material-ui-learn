import React, {Fragment} from 'react'
import {rootRoutes} from './routes'

const App = ({history}) => {
    return <Fragment>{rootRoutes()}</Fragment>
}

export default App
