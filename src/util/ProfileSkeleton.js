import React from 'react';
import NoImg from '../images/no-img.png';
import PropTypes from 'prop-types';

// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from "@material-ui/core/Paper";

// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';

const styles = (theme) => ({
    paper: theme.paper,
    profile: theme.profile,
    buttons: theme.buttons,
    handle: {
        width: 60,
        height: 20,
        backgroundColor: theme.palette.primary.main,
        margin: '0 auto 7px auto'
    },
    fullLine: {
        width: '100%',
        height: 15,
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 10
    },
});

const ProfileSkeleton = (props) => {
    const {classes} = props;
    return (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className='image-wrapper'>
                    <img className='profile-image' src={NoImg} alt='profile'/>
                </div>
                <hr/>
                <div className='profile-details'>
                    <div className={classes.handle}/>
                    <hr/>
                    <div className={classes.fullLine}/>
                    <div className={classes.fullLine}/>
                    <hr/>
                    <LocationOn color='primary'/><span>Location</span>
                    <hr/>
                    <LinkIcon color='primary'/> https://website.com
                    <hr/>
                    <CalendarToday color='primary'/> Joined date
                </div>
            </div>
        </Paper>
    )
};

ProfileSkeleton.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileSkeleton);
