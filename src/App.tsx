import React from 'react';

import './App.css';


import {HashRouter as Router, Route,  Switch} from 'react-router-dom'

import Footer from "./employerClient/sections/components/headerComponents/Footer";
import NavBar from './employerClient/sections/components/headerComponents/navbar/NavBar';
import LandingPage from "./employerClient/sections/pages/LandingPage";
import AddInternship from "./employerClient/sections/pages/AddInternship";
import SearchPage from "./employerClient/sections/pages/SearchPage";
import Support from "./employerClient/sections/pages/Support";
import Profile from "./employerClient/sections/pages/Profile";
import Favorite from "./employerClient/sections/pages/Favorite";



function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/home" component={LandingPage}/>
                <Route exact path="/addInternship" component={AddInternship}/>
                <Route exact path="/search" component={SearchPage}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/favorite" component={Favorite}/>
                <Route exact path="/support" component={Support}/>
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
