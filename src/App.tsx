import React from 'react';

import './App.css';
import NavBar from "./Componenets/NavBar/NavBar";
import TestOne from "./Componenets/MocktComponenet/TestOne";
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {TestTwo} from "./Componenets/MocktComponenet/TestTwo";
import TestThree from "./Componenets/MocktComponenet/TestThree";
import MinSida from "./Componenets/MinaSidor/MinSida";

/*
imageUrl:string,
    companyInfo:string,
    companyName:string,
    email:string,
    password:string,
    userName:string
*/

function App() {
    return (
        <Router>
            <NavBar/>
            <MinSida imageUrl={} companyInfo={} companyName={} email={} password={} userName={} />
            <Switch>
                <Route exact path="/TestOne" component={TestOne}/>
                <Route exact path="/TestTwo" component={TestTwo}/>
                <Route exact path="/TestThree" component={TestThree}/>
            </Switch>
        </Router>
    );
}

export default App;
