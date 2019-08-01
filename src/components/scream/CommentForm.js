import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Redux
import {connect} from 'react-redux';
import {submitComment} from "../../redux/actions/dataActions";

// MUI stuff
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
    textField: theme.textField,
    button: theme.button,
    visibleSeparator: theme.visibleSeparator
});

class CommentForm extends Component {
    state = {
        body: '',
        errors: {}
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.UI.errors) {
            this.setState({errors: nextProps.UI.errors});
        }
        if (!nextProps.UI.errors && !nextProps.UI.loading) {
            this.setState({
                body: '',
                errors: {}
            });
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitComment(this.props.screamId, {
            body: this.state.body
        });
    };

    render() {
        const {classes, authenticated} = this.props;
        const {errors} = this.state;
        const commentFormMarkup = authenticated ? (
            <Grid item sm={12} style={{textAlign: 'center'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        name='body'
                        type='text'
                        label='Comment on scream'
                        error={!!errors.comment}
                        helperText={errors.comment}
                        value={this.state.body}
                        onChange={this.handleChange}
                        fullWidth
                        className={classes.textField}
                    />
                    <Button type='submit' variant='contained' color='primary' className={classes.button}>Submit</Button>
                </form>
                <hr className={classes.visibleSeparator}/>
            </Grid>) : null;
        return commentFormMarkup;
    }
}

CommentForm.propTypes = {
    UI: PropTypes.object.isRequired,
    submitComment: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    authenticated: PropTypes.bool.isRequired,
    screamId: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
    UI: state.UI,
    authenticated: state.user.authenticated
});


export default connect(mapStateToProps, {submitComment})(withStyles(styles)(CommentForm));
