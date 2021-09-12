import React from 'react';

import './App.css';
import NavBar from "./Componenets/NavBar/NavBar";
import TestOne from "./Componenets/MocktComponenet/TestOne";
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {TestTwo} from "./Componenets/MocktComponenet/TestTwo";
import TestThree from "./Componenets/MocktComponenet/TestThree";


function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/TestOne" component={TestOne}/> {/*ändra på path och ändra component */}
                <Route exact path="/TestTwo" component={TestTwo}/>
                <Route exact path="/TestThree" component={TestThree}/>
            </Switch>
        </Router>
    );
}

export default App;
