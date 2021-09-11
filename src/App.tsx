import React from 'react';

import './App.css';
import NavBar from "./Componenets/NavBar/NavBar";
import TestOne from "./Componenets/TestComponenet/TestOne";
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {TestTwo} from "./Componenets/TestComponenet/TestTwo";
import TestThree from "./Componenets/TestComponenet/TestThree";


function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/TestOne" component={TestOne}/>
                <Route exact path="/TestTwo" component={TestTwo}/>
                <Route exact path="/TestThree" component={TestThree}/>
            </Switch>
        </Router>
    );
}

export default App;
