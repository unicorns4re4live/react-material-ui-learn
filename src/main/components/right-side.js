import React, {useEffect, useState} from 'react';
import {Typography, Grid} from "@material-ui/core";
import {Projects} from "./projects";
import data from "./data/data.json"
import {CircularProgress} from "@material-ui/core";


const RightSideView = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        // Update the document title using the browser API
        setTimeout(() => {
            setProjects(data['projects'])
        }, 500)

    }, [projects]);
    return (
        <Grid container item xs={12} sm={6} direction="column"
              justify="flex-start"
              alignItems="center">
            <Grid>
                <Typography variant={'subtitle1'}>Projects</Typography>
            </Grid>
            {
                projects.length > 0?
                    (<Projects projects={projects}/>) :  (<CircularProgress/>)
            }
        </Grid>
    );
}

export const RightSide = RightSideView