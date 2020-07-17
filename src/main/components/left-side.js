import React from 'react';
import {
    CircularProgress,
    Grid
} from "@material-ui/core";
import withStyles from '@material-ui/core/styles/withStyles'
import {TechnologyInfo} from "../../common/components/bio/technology";
import {AvatarPart} from "../../common/components/bio/ava";
import {ContactsInfo} from "../../common/components/bio/contacts";
import {technologiesSelector} from "../selectors";
import {connect} from "react-redux";

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

const mapStateToProps = state => ({
    technologies: technologiesSelector(state),
})

const LeftSideView = ({classes, technologies}) => {
    return (
        <Grid className={classes.root} container item xs={12} sm={12} md={6}
              direction="column"
              justify="flex-start"
              alignItems="center" spacing={5}>
            <AvatarPart/>
            {
                technologies != null ?
                    (<TechnologyInfo technologies={technologies}/>) : (<CircularProgress/>)
            }
            <ContactsInfo/>
        </Grid>
    );
}

export const LeftSide = connect(mapStateToProps)(withStyles(styles)(LeftSideView))