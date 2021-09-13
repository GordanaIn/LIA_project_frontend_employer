import React from 'react';

import './App.css';
import NavBar from "./Componenets/NavBar/NavBar";
import TestOne from "./Componenets/MocktComponenet/TestOne";
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {TestTwo} from "./Componenets/MocktComponenet/TestTwo";
import TestThree from "./Componenets/MocktComponenet/TestThree";
import MinSida from "./Componenets/MinaSidor/MinSida";
import {LoremIpsum, UrlPlaceholderMidaSidor} from "./Componenets/MocktComponenet/MockInfoPlaceHolders";

//testin go diffrent branch
//just want this to work

function App() {
    return (
        <Router>
            <NavBar/>
            <MinSida imageUrl={UrlPlaceholderMidaSidor} companyInfo={LoremIpsum} companyName="Lialiser co" email="mockEmail@email" userName="Kalle MOnter" password="jlksa465"  />
            <Switch>
                <Route exact path="/TestOne" component={TestOne}/>
                <Route exact path="/TestTwo" component={TestTwo}/>
                <Route exact path="/TestThree" component={TestThree}/>
            </Switch>
        </Router>
    );
}

export default App;
