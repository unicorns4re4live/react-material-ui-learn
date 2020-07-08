import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {Header} from './header'
import {Footer} from './footer'

const styles = theme => ({
    root: {
        width: '100%',
        background: '#F4F4F4',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    container: {
        width: '100%',
        height: '100%',
        flex: '1',
        maxWidth: '1590px',
        margin: '40px auto 60px auto',
        padding: '0 40px',
        alignContent: 'flex-start'
    }
})
const CommonTemplateView = ({
                                children,
                                classes,
                            }) => {

    return (
        <div className={classes.root}>
            <Header/>
                <Grid container className={classes.container}>
                    {children}
                </Grid>
            <Footer/>
        </div>


    )
}

export const CommonTemplate = (withStyles(styles)(CommonTemplateView))