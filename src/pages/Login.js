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
    progress: theme.progress
});

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post(`${FIREBASE_CORE_HOST}/login`, userData)
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
                        {errors.general && (
                            <Typography variant='body2' className={classes.customError}>{errors.general}</Typography>
                        )}
                        <Button type='submit' variant='text' color='primary' className={classes.button}
                                fullWidth disabled={loading}>
                            Login
                            {loading && (
                                <CircularProgress className={classes.progress}/>
                            )}
                        </Button>
                        <small>dont have an account ? sign up <Link to='/signup'>here</Link></small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        );
    }
}

Login.propTypes = {
    classes: PropType.object.isRequired
};

export default withStyles(styles)(Login);
