import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Portal, Fade} from '@material-ui/core';


const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        padding: '20px',
        left:0,
        top: 0,
        position: 'fixed',
        justifySelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: "#fff",
    }

});

const DialogWindowView = ({children, classes, open, handleClose}) => {
    // getModalStyle is not a pure function, we roll the style only on the first render

    return (
            <Portal container={document.querySelector('#root')}>

                <Fade
                    in={open}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    onClick={handleClose}
                    className={classes.root}
                >
                    {children}
                </Fade>
            </Portal>
    );
}

export const DialogWindow = withStyles(styles)(DialogWindowView)