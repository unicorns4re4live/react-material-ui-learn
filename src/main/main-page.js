import React from 'react';
import {Grid} from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles'
import {LeftSide} from "./components/left-side";
import {RightSide} from "./components/right-side";
import {CommonTemplate} from "../common/components/common-template";

const styles = theme => ({
    root: {
        minHeight: '100vh',
        backgroundColor: '#F4F4F4'
    }
})

const MainPageView = ({classes}) => {

    return (
        <CommonTemplate>
            <Grid className={classes.root} spacing={7} container>
                <LeftSide/>
                <RightSide/>
            </Grid>
        </CommonTemplate>
    );
}

export const MainPage = withStyles(styles)(MainPageView)