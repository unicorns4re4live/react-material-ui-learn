import React from 'react';
import {Typography, Grid, Link, Button, Accordion, AccordionSummary, AccordionDetails} from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles'
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import {CommonTemplate} from "./components/common-template";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
    root: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#F4F4F4'
    }
})

const preventDefault = (event) => event.preventDefault();

const ElementsPageView = ({classes}) => {
    return (
        <CommonTemplate>
            <Grid className={classes.root} container>
                <Typography variant="h1" component="h1">
                    h1. Heading
                </Typography>
                <Typography variant="h2" component="h2">
                    h2. Heading
                </Typography>
                <Typography variant="h3" component="h3">
                    h3. Heading
                </Typography>
                <Typography variant="h4" component="h4">
                    h4. Heading
                </Typography>
                <Typography variant="h5" component="h5">
                    h5. Heading
                </Typography>
                <Typography variant="h6" component="h6" gutterBottom>
                    h6. Heading
                </Typography>
                <Typography variant="subtitle1" component="h2">
                    subtitle1
                </Typography>
                <Typography variant="body1" component="p">
                    body1
                </Typography>
                <Link href="#" onClick={preventDefault}>
                    Link
                </Link>
                <AirlineSeatIndividualSuiteIcon width={100}/>
                <Button className={'accept'}>Accept</Button>
                <Button className={'cancel'}>Cancel</Button>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Accordion</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Accordion summary
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </CommonTemplate>
    );
}

export const ElementsPage = withStyles(styles)(ElementsPageView)