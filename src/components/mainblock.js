import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home';
import Login from './Login';
import Navibar from './navibar';
import News from './news';
import Profile from './Profile';
import store from './store';



export default class Mainblock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textBtn: ''
        }
    }

    componentDidMount() {
        this.setState({
            textBtn: store.getState().btnLog
        })
    }

    render() {

        store.subscribe(() => {
            this.setState({
                textBtn: store.getState().btnLog
            });
        })


        return (
            <>
                <Router>
                    <Navibar btn={this.state.textBtn} />
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