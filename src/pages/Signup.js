import React, {Component} from 'react';
import PropType from 'prop-types';
import AppIcon from '../images/icon.jpg';
import axios from 'axios';
import {FIREBASE_CORE_HOST} from '../constants/Constants';
import {Link} from 'react-router-dom';

// MUI stuff
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress"

const styles = (theme) => ({
    form: theme.form,
    image: theme.image,
    textField: theme.textField,
    button: theme.button,
    customError: theme.customError,
    progress: theme.progress,
});

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            handle: '',
            loading: false,
            errors: {}
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle
        };
        axios.post(`${FIREBASE_CORE_HOST}/signup`, newUserData)
            .then(res => {
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        const {classes} = this.props;
        const {errors, loading} = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <img className={classes.image} src={AppIcon} alt='dog'/>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id='email' name='email' type='email' label='Email' className={classes.textField}
                                   helperText={errors.email} error={!!errors.email}
                                   value={this.state.email} onChange={this.handleChange}
                                   fullWidth/>
                        <TextField id='password' name='password' type='password' label='Password'
                                   className={classes.textField}
                                   helperText={errors.password} error={!!errors.password}
                                   value={this.state.password} onChange={this.handleChange} fullWidth/>
                        <TextField id='confirmPassword' name='confirmPassword' type='password'
                                   label='Confirm Password'
                                   className={classes.textField}
                                   helperText={errors.confirmPassword} error={!!errors.confirmPassword}
                                   value={this.state.confirmPassword} onChange={this.handleChange} fullWidth/>
                        <TextField id='handle' name='handle' type='text' label='Handle'
                                   className={classes.textField}
                                   helperText={errors.handle} error={!!errors.handle}
                                   value={this.state.handle} onChange={this.handleChange} fullWidth/>
                        {errors.general && (
                            <Typography variant='body2' className={classes.custoemError}>{errors.general}</Typography>
                        )}
                        <Button type='submit' variant='text' color='primary' className={classes.button}
                                fullWidth disabled={loading}>
                            Signup
                            {loading && (
                                <CircularProgress className={classes.progress}/>
                            )}
                        </Button>
                        <small>Already have an account ? login <Link to='/login'>here</Link></small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        );
    }
}

Signup.propTypes = {
    classes: PropType.object.isRequired
};

export default withStyles(styles)(Signup);
