import React from 'react';

import './App.css';


import {HashRouter as Router, Route,  Switch} from 'react-router-dom'

import Footer from "./employerClient/sections/components/headerComponents/Footer";
import NavBar from './employerClient/sections/components/headerComponents/navbar/NavBar';
import LandingPage from "./employerClient/sections/pages/LandingPage";

import SearchPage from "./employerClient/sections/pages/SearchPage";
import Support from "./employerClient/sections/pages/Support";
import Profile from "./employerClient/sections/pages/Profile";
import Favorite from "./employerClient/sections/pages/Favorite";
import AddInternship from "./employerClient/sections/pages/AddInternship";
import ListOfInternships from "./employerClient/sections/pages/ListOfInternships";



function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/home" component={LandingPage}/>
                <Route path="/addInternship" exact={true} component={AddInternship}/>
                <Route exact path="/search" component={SearchPage}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/favorite" component={Favorite}/>
                <Route exact path="/support" component={Support}/>
                <Route path="/listOfInternship"  exact={true} component={ListOfInternships}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
