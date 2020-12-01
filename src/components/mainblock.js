import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Navibar from './Navibar';
import News from './News';
import Profile from './Profile';


export default class Mainblock extends React.Component {


    render() {
        return (
            <>
                <Router>
                    <Navibar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </Router>
            </>
        );
    }
}