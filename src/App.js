import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Router basename='/socialape-client'>
                    <Navbar/>
                    <div className='container'>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/signup" component={Signup}/>
                        </Switch>
                    </div>
                </Router>
            </div>

        )
    }
}

export default App;
