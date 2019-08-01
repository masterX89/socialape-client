import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import customTheme from './theme/theme';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

// Redux
import {Provider} from 'react-redux';
import store from './redux/store';
import {SET_AUTHENTICATED} from "./redux/types";
import {logoutUser, getUserData} from "./redux/actions/userActions";

// Components
import Navbar from './components/layout/Navbar';
import AuthRoute from './util/AuthRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import User from './pages/User';

const theme = createMuiTheme(customTheme);

const token = localStorage.FBIdToken;
if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
        // window.location.href = '/login';
        store.dispatch(logoutUser());
    } else {
        store.dispatch({type: SET_AUTHENTICATED});
        axios.defaults.headers.common['Authorization'] = token;
        store.dispatch(getUserData());
    }
}

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <Router basename='/socialape-client'>
                        <Navbar/>
                        <div className='container'>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <AuthRoute path="/login" component={Login}/>
                                <AuthRoute path="/signup" component={Signup}/>
                                <Route path="/users/:handle" component={User}/>
                            </Switch>
                        </div>
                    </Router>
                </Provider>
            </MuiThemeProvider>
        )
    }
}

export default App;
