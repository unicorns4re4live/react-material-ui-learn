import React, {useEffect, useCallback} from 'react';
import {Typography, Grid} from "@material-ui/core";
import {Projects} from "./projects";
import {CircularProgress} from "@material-ui/core";
import connect from 'react-redux/es/connect/connect'
import {getProjects} from "../effects";
import {projectsSelector} from "../selectors";


const mapStateToProps = state => ({
    projects: projectsSelector(state),
})

const mapDispatchToProps = dispatch => ({
    getProjects: () => dispatch(getProjects),
})


const RightSideView = ({projects, getProjects}) => {
    const getProjectsCallback = useCallback(() => {
        const fetchIssuer = async () => {
            await getProjects()
        }
        fetchIssuer()
    }, [getProjects])
    useEffect(() => {
        getProjectsCallback()
    }, [getProjectsCallback])
    return (
        <Grid container item xs={12} sm={6} direction="column"
              justify="flex-start"
              alignItems="center">
            <Grid>
                <Typography variant={'subtitle1'}>Projects</Typography>
            </Grid>
            {
                projects != null ?
                    (<Projects projects={projects}/>) : (<CircularProgress/>)
            }
        </Grid>
    );
}

export const RightSide = connect(
    mapStateToProps,
    mapDispatchToProps
)(RightSideView)

