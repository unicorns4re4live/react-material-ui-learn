import React, {useCallback, useEffect} from 'react';
import {Grid} from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles'
import {LeftSide} from "./components/left-side";
import {RightSide} from "./components/right-side";
import {CommonTemplate} from "../common/components/common-template";
import {connect} from "react-redux";
import {getData} from "./effects";

const styles = theme => ({
    root: {
        minHeight: '100vh',
        backgroundColor: '#F4F4F4'
    }
})

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    getData: () => dispatch(getData),
})

const MainPageView = ({classes, getData}) => {
    const getDataCallback = useCallback(() => {
        const dataFetching = async () => {
            await getData()
        }
        dataFetching()
    }, [getData])
    useEffect(() => {
        getDataCallback()
    }, [getDataCallback])
    return (
        <CommonTemplate>
            <Grid className={classes.root} spacing={7} container>
                <LeftSide/>
                <RightSide/>
            </Grid>
        </CommonTemplate>
    );
}

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainPageView))