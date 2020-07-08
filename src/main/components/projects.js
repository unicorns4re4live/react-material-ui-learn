import React from 'react';
import {Grid} from "@material-ui/core";
import {ProjectCard} from "./project-card";

const ProjectsView = ({projects}) => {

    return (
        <div>
            {
                projects.map((project) => {
                    return (
                        <Grid key={project['id']} >
                            <ProjectCard  title={project['title']}
                                         description={project['description']} imgSrc={project['imgSrc']}/>
                        </Grid>
                    )
                })
            }
        </div>
    );
}

export const Projects = ProjectsView