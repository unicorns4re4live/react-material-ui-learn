import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        width: '100%',
        background: '#000',
        display: 'flex',
        flexDirection: 'column'
    },
    helpLink: {
        paddingRight: '15px',
        paddingBottom: '10px',
        textDecoration: 'none',
        color: '#fff',
        fontSize: '14px;'
    },
    grid: {
        padding: '20px 100px'
    },
    copyright: {
        color: '#fff'
    }

})

const FooterView = ({classes}) => {
    return (
        <div className={classes.root}>
            <Grid container className={classes.grid} wrap={'nowrap'} alignItems={'center'}>
                <Grid container className={classes.rights} justify={'center'}>
                    <Typography variant="h4" className={classes.copyright}>© 2020 All rights reserved</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export const Footer = withStyles(styles)(FooterView)