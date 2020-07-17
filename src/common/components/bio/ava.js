import Avatar from "@material-ui/core/Avatar";
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import avatar from "../../../images/ava.png"

const styles = theme => ({
    avatar: {
        alignSelf: 'center',
        width: 320,
        height: 420,
    },
    subtitle: {
        marginBottom: -50
    }
})


const AvatarPartView = ({classes}) => {

    return (
            <Grid container item direction="row"
                  justify="center">
                <Typography variant={'subtitle1'} className={classes.subtitle}>Me</Typography>
                <Avatar variant={'square'} className={classes.avatar} alt="Ava"
                        src={avatar}/>
            </Grid>

    );
}

export const AvatarPart = withStyles(styles)(AvatarPartView)