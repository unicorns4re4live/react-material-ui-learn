import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LensRoundedIcon from '@material-ui/icons/LensRounded';

const styles = theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    leftPoint: {
        '&:hover': {
            color: '#15963e',
            cursor: 'default'
        },
        width: 15,
        height: 15,
        marginRight: 10
    }
});

const TechnologyDataView = ({classes, title, technologies}) => {

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>{title+":"}</Typography>
            </AccordionSummary>
            <AccordionDetails>

                <List className={classes.root} subheader={<li/>}>
                    {
                        technologies.map((technology) => (
                            <ListItem key={`technology-${technology}`}>
                                <LensRoundedIcon className={classes.leftPoint}/>
                                <ListItemText primary={technology}/>
                            </ListItem>
                        ))
                    }
                </List>
            </AccordionDetails>
        </Accordion>
    );
}

export const TechnologyData = withStyles(styles)(TechnologyDataView)