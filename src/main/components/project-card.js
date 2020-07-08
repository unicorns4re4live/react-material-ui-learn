import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        transition:  theme.transitions.create(
            ['transform'],
            {duration: theme.transitions.duration.complex}
        ),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 480,
        height: 420,
        marginBottom: '40px',
        '&:hover': {
            transform: 'scale(1.1,1.1)'
        }
    },
    media: {
        height: 140
    },
});

const ProjectCardView = ({classes, title, imgSrc, description, id}) => {
    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imgSrc}
                    title="Project"
                />
                <CardContent>
                    <Typography gutterBottom variant="h2" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button className={'accept'}>
                    View
                </Button>
            </CardActions>
        </Card>
    );
}

export const ProjectCard = withStyles(styles)(ProjectCardView)