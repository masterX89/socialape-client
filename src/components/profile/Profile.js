import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import EditDetails from './EditDetails';
import MyButton from '../../util/MyButton';
import ProfileSkeleton from "../../util/ProfileSkeleton";

// Redux
import {connect} from 'react-redux';
import {logoutUser, uploadImage} from "../../redux/actions/userActions";

// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarToday from '@material-ui/icons/CalendarToday';
import EditIcon from '@material-ui/icons/Edit';
import KeyboardReturn from '@material-ui/icons/KeyboardReturn';

const styles = (theme) => ({
    paper: theme.paper,
    profile: theme.profile,
    buttons: theme.buttons
});

class Profile extends Component {
    handleImageChange = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        this.props.uploadImage(formData);
    };
    handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    };
    handleLogout = () => {
        this.props.logoutUser();
    };

    render() {
        const {
            classes,
            user: {
                authenticated,
                credentials: {handle, createdAt, imageUrl, bio, website, location},
                loading
            }
        } = this.props;
        let profileMarkeup = !loading ? (authenticated ? (
            <Paper className={classes.paper}>
                <div className={classes.profile}>
                    <div className='image-wrapper'>
                        <img className='profile-image' src={imageUrl} alt='profile'/>
                        <input type='file' id='imageInput' onChange={this.handleImageChange} hidden/>
                        <MyButton tip='Edit profile picture' placement='left-end' onClick={this.handleEditPicture}
                                  btnClassName='button'>
                            <EditIcon color='primary'/>
                        </MyButton>
                    </div>
                    <hr/>
                    <div className='profile-details'>
                        <MuiLink component={Link} to={`/users/${handle}`} color='primary' variant='h5'>
                            @{handle}
                        </MuiLink>
                        <hr/>
                        {bio && <Typography variant='body2'>{bio}</Typography>}
                        <hr/>
                        {Location && (
                            <Fragment>
                                <LocationOn color='primary'/>
                                <span>{location}</span>
                                <hr/>
                            </Fragment>
                        )}
                        {website && (
                            <Fragment>
                                <LinkIcon color='primary'/>
                                <a href={website} target='_blank' rel='noopener noreferrer'>
                                    {website}
                                </a>
                                <hr/>
                            </Fragment>
                        )}
                        <CalendarToday color='primary'/>{'  '}
                        <span>Joined {dayjs(createdAt).format('MMM YYYY')}</span>
                    </div>
                    <MyButton tip='Logout' placement='top' onClick={this.handleLogout}>
                        <KeyboardReturn color='primary'/>
                    </MyButton>
                    <EditDetails/>
                </div>
            </Paper>
        ) : (
            <Paper className={classes.paper}>
                <Typography variant='body2' align='center'>
                    No profile found, please login again
                </Typography>
                <div className={classes.buttons}>
                    <Button variant='contained' color='primary' component={Link} to='/login'>Login</Button>
                    <Button variant='contained' color='secondary' component={Link} to='/signup'>Signup</Button>
                </div>
            </Paper>
        )) : (<ProfileSkeleton/>);
        return profileMarkeup;
    }
}

const mapStateToProps = (state) => ({
    user: state.user
});

const mapActionToProps = {logoutUser, uploadImage};

Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    uploadImage: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Profile));
