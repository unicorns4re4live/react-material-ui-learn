import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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
            >
                {children}
            </Modal>
    );
}

export const DialogWindow = withStyles(styles)(DialogWindowView)