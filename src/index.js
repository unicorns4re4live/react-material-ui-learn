import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {theme} from "./theme";
import {createBrowserHistory} from "history";
import {configureStore} from './store'
import {MuiThemeProvider} from "@material-ui/core";
import {ConnectedRouter} from 'connected-react-router'

const history = createBrowserHistory()
const store = configureStore({history})


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App history={history}/>
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

