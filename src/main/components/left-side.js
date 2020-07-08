import React from 'react';
import {Typography, Grid} from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles'
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    avatar: {
        alignSelf: 'center',
        width: 320,
        height: 420,
    }
})


const LeftSideView = ({classes}) => {
    return (
        <Grid className={classes.root} container item xs={12} sm={6}
              direction="column"
              justify="flex-start"
              alignItems="center">
            <Grid container item direction="row"
                  justify="center">
                <Typography variant={'subtitle1'}>Me</Typography>
            </Grid>
            <Grid container item direction="row"
                  justify="center">
                <Avatar variant={'square'} className={classes.avatar} alt="Ava" src="https://avatars.mds.yandex.net/get-zen_doc/1590219/pub_5cff6669e77f2e00b01d17d3_5cff980f42211f00abc3e967/scale_1200" />
            </Grid>
        </Grid>
    );
}

export const LeftSide = withStyles(styles)(LeftSideView)