import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import {TechnologyData} from "../technology-data";

const styles = theme => ({
    avatar: {
        alignSelf: 'center',
        width: 320,
        height: 420,
    },
    subtitle: {
        marginBottom: -50
    },
    technologiesPart: {
        width: '100%'
    }
})

const TechnologyInfoView = ({classes, technologies}) => {

    return (
        <Grid container item direction="row"
              justify="center">
            <Typography variant={'subtitle1'} className={classes.subtitle}>Who am I?</Typography>
            <Typography variant={'body1'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.

                I'm using the cutting edge technologies such as:


            </Typography>
            <div className={classes.technologiesPart}>
                {
                    Object.keys(technologies).map((key) => {
                        return <TechnologyData key={key} title={key} technologies={technologies[key]}/>

                    })
                }
            </div>
            <Typography>
                Contact me to work with a reliable, creative and experienced IT specialist. Let's get
                the job done!
            </Typography>
        </Grid>
    );
}

export const TechnologyInfo = withStyles(styles)(TechnologyInfoView)