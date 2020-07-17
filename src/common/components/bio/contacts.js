import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Grid, AppBar, Tabs, Tab, Box} from "@material-ui/core";
import PropTypes from 'prop-types';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import SendIcon from '@material-ui/icons/Send';
import CreateIcon from '@material-ui/icons/Create';

const styles = theme => ({
    avatar: {
        alignSelf: 'center',
        width: 320,
        height: 420,
    },
    subtitle: {
        marginBottom: -50
    },
    tabIcon: {
        width: 35,
        height: 35
    },
    tabPart: {
        backgroundColor: "#fff"
    },
    contentPart: {
        backgroundColor: '#fff',
        width: '100%',
        textAlign: 'center'
    }

})
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const ContactsInfoView = ({classes}) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Grid container item direction="row"
              justify="center">
            <Typography variant={'subtitle1'} className={classes.subtitle}>Contacts</Typography>
            <AppBar position="static" className={classes.tabPart}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label={<MailRoundedIcon className={classes.tabIcon}/>} {...a11yProps(0)} />
                    <Tab label={<SendIcon className={classes.tabIcon}/>} {...a11yProps(1)} />
                    <Tab label={<CreateIcon className={classes.tabIcon}/>}  {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} className={classes.contentPart}>
                afwwawf@fafawfwa.wfafwa
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.contentPart}>
                @telegramName
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.contentPart}>
                socialmediallink.com
            </TabPanel>
        </Grid>
    );
}

export const ContactsInfo = withStyles(styles)(ContactsInfoView)