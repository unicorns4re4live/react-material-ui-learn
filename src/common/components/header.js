import React, {useState} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {NavLink} from 'react-router-dom'
import {Grid, Typography} from '@material-ui/core'
import AndroidIcon from '@material-ui/icons/Android';
import {DialogWindow} from "../../ui/modal";

const styles = theme => ({
    root: {
        width: '100%',
        background: '#000',
        display: 'flex',
        flexDirection: 'column'
    },
    helpLink: {
        paddingRight: '15px',
        paddingBottom: '10px',
        textDecoration: 'none',
        color: '#fff',
        fontSize: '14px;'
    },
    grid: {
        padding: '20px 100px'
    },
    logo: {
        transition: theme.transitions.create(
            ['color'],
            {duration: theme.transitions.duration.complex}
        ),
    },
    easterEgg: {
      color: '#fff'
    }
})


const HeaderView = ({classes}) => {
    const [openModal, setOpenModal] = useState(false)
    const children = (
        <div>
            <Typography  variant={'h4'} className={classes.easterEgg}>
                я вставил сюда модалку просто, чтобы поиграться с modal
            </Typography>
        </div>
    )

    const handleClickAndroid = () => {
        setOpenModal(true)
    }

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <div className={classes.root}>
            <Grid container className={classes.grid} justify={'center'} wrap={'nowrap'} alignItems={'center'}>
                <Grid container justify={'center'}>
                    <NavLink to={'/elements'} className={classes.helpLink}>
                        <Typography variant={'h2'}>
                            Elements
                        </Typography>
                    </NavLink>
                </Grid>
                <Grid container className={classes.logo} justify={'center'}>
                    <AndroidIcon onClick={handleClickAndroid}/>
                </Grid>
                <Grid container  justify={'center'}>
                    <NavLink to={'/'} className={classes.helpLink}>
                        <Typography variant={'h2'}>
                            Main
                        </Typography>

                    </NavLink>

                </Grid>
            </Grid>
            <DialogWindow children={children} open={openModal} handleClose={handleCloseModal}/>
        </div>
    )
}

export const Header = withStyles(styles)(HeaderView)