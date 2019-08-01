import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Scream from '../components/scream/Scream';
import {FIREBASE_CORE_HOST} from "../constants/Constants";
import StaticProfile from '../components/profile/StaticProfile';

// Redux
import {connect} from 'react-redux';
import {getUserData} from "../redux/actions/dataActions";

// MUI stuff
import Grid from '@material-ui/core/Grid';

class User extends Component {
    state = {
        profile: null
    };

    componentDidMount() {
        const handle = this.props.match.params.handle;
        this.props.getUserData(handle);
        axios.get(`${FIREBASE_CORE_HOST}/user/${handle}`)
            .then(res => {
                this.setState({profile: res.data.user})
            })
            .catch(err => console.log(err));
    }

    render() {
        // TODO: 解决在用户界面中，跳转其他用户的问题
        console.log('是否渲染');
        const {screams, loading} = this.props.data;
        let screamsMarkup = !loading ? screams.length === 0 ? (
            <p>No screams from this user</p>
        ) : (
            screams.map(scream => <Scream key={scream.screamId} scream={scream}/>
            )
        ) : <p>Loading...</p>;
        return (
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    {screamsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    {this.state.profile === null ? (<p>Loading profile</p>) : (
                        <StaticProfile profile={this.state.profile}/>)}
                </Grid>
            </Grid>
        );
    }
}

User.propTypes = {
    getUserData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps, {getUserData})(User);
