import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import {FIREBASE_CORE_HOST} from '../constants/Constants';

import Scream from '../components/Scream';

class Home extends Component {
    state = {
        screams: null
    };

    componentDidMount() {
        axios.get(`${FIREBASE_CORE_HOST}/screams`)
            .then(res => {
                console.log(res);
                this.setState({
                    screams: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        let recentScreamsMarkup = this.state.screams ? (
            this.state.screams.map(scream => <Scream scream={scream}/>
            )
        ) : <p>Loading...</p>;
        return (
            <Grid container spacing={2}>
                <Grid item sm={8} xs={12}>
                    {recentScreamsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Profile</p>
                </Grid>
            </Grid>
        );
    }
}

export default Home;
