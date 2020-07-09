import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


const styles = theme => ({
    root: {
            width: 'auto',
            padding: '20px'
    }
});

const DialogWindowView = ({children, classes, open, handleClose}) => {
    // getModalStyle is not a pure function, we roll the style only on the first render


    return (
        <Modal
            open={open}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            onClose={handleClose}
            className={classes.root}
        >
            {children}
        </Modal>
    );
}

export const DialogWindow = withStyles(styles)(DialogWindowView)