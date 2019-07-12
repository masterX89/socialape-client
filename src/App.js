import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import customTheme from './theme/theme';
import jwtDecode from 'jwt-decode';
// Components
import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const theme = createMuiTheme(customTheme);

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
        window.location.href = '/login';
        authenticated = false;
    } else {
        authenticated = true;
    }
}

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className='App'>
                    <Router basename='/socialape-client'>
                        <Navbar/>
                        <div className='container'>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <AuthRoute path="/login" component={Login} authenticated={authenticated}/>
                                <AuthRoute path="/signup" component={Signup} authenticated={authenticated}/>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App;
