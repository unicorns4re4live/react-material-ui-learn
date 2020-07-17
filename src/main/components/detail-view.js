import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {DialogWindow} from "../../ui/modal";
import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({
    root: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        marginBottom: '40px',
    },
    media: {
        height: 500,
    },
    close: {
        color: 'red',
        position: 'fixed',
        right: 0
    }
});

const ProjectCardDetailView = ({classes, title, imgSrc, description, open, handleClose}) => {
    const child = (
        <Card className={classes.root} elevation={0}>
            <CloseIcon className={classes.close} onClick={handleClose}/>
            <CardContent>
                <CardMedia
                    className={classes.media}
                    image={imgSrc}
                    title="Project"
                />
                <Typography gutterBottom variant="h2" component="h2">
                    {title}
                </Typography>
                <Typography variant="body1" component="p">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
    return (
        <DialogWindow open={open} handleClose={handleClose}>
            {child}
        </DialogWindow>
    );
}

export const ProjectCardDetail = withStyles(styles)(ProjectCardDetailView)