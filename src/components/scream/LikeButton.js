import React, {Component} from 'react';
import MyButton from "../../util/MyButton";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

// Redux
import {connect} from "react-redux";
import {likeScream, unlikeScream} from "../../redux/actions/dataActions";

// MUI Icon
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

class LikeButton extends Component {
    likedScream = () =>
        this.props.user.likes && this.props.user.likes.find(like => like.screamId === this.props.scream.screamId);
    likeScream = () => {
        this.props.likeScream(this.props.scream.screamId);
    };
    unlikeScream = () => {
        this.props.unlikeScream(this.props.scream.screamId);
    };

    render() {
        const {authenticated} = this.props.user;
        const likeButton = !authenticated ? (
            <Link to='/login'>
                <MyButton tip='like'>
                    <FavoriteBorder color='primary'/>
                </MyButton>
            </Link>
        ) : (
            this.likedScream() ? (
                <MyButton tip='Undo like' onClick={this.unlikeScream}>
                    <FavoriteIcon color='primary'/>
                </MyButton>
            ) : (
                <MyButton tip='like' onClick={this.likeScream}>
                    <FavoriteBorder color='primary'/>
                </MyButton>
            )

        );
        return likeButton;
    }
}

LikeButton.propTypes = {
    likeScream: PropTypes.func.isRequired,
    unlikeScream: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    scream: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    user: state.user
});

const mapActionsToProps = {
    likeScream,
    unlikeScream
};

export default connect(mapStateToProps, mapActionsToProps)(LikeButton);
