import React from 'react';
import {Typography, Grid} from "@material-ui/core";
import {Projects} from "./projects";
import {CircularProgress} from "@material-ui/core";
import connect from 'react-redux/es/connect/connect'
import {projectsSelector} from "../selectors";


const mapStateToProps = state => ({
    projects: projectsSelector(state),
})



const RightSideView = ({projects}) => {

    return (
        <Grid container item xs={12} sm={12}  md={6} direction="column"
              justify="flex-start"
              alignItems="center">
            <Grid>
                <Typography variant={'subtitle1'} style={{marginBottom: -50}}>Projects</Typography>
            </Grid>
            {
                projects != null ?
                    (<Projects projects={projects}/>) : (<CircularProgress/>)
            }
        </Grid>
    );
}

export const RightSide = connect(mapStateToProps)(RightSideView)

