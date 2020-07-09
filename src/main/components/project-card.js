import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {ProjectCardDetail} from "./detail-view";

const styles = theme => ({
    root: {
        transition: theme.transitions.create(
            ['transform'],
            {duration: theme.transitions.duration.complex}
        ),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth:  480,
        minWidth: 320,
        height: 360,
        marginBottom: '40px',
        '&:hover': {
            transform: 'scale(1.1,1.1)'
        }
    },
    media: {
        height: 140
    }
});

const ProjectCardView = ({classes, title, imgSrc, description}) => {
    const [openModal, setOpenModal] = useState(false)

    const handleClick = (event) => {
        event.preventDefault()
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
            <Card className={classes.root}>
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
                        <Typography variant="body1" component="p" noWrap={true}>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button className={'accept'} onClick={handleClick}>
                        View
                    </Button>
                </CardActions>
                <ProjectCardDetail title={title} imgSrc={imgSrc} description={description} open={openModal}
                                   handleClose={handleCloseModal}/>
            </Card>
    );
}

export const ProjectCard = withStyles(styles)(ProjectCardView)