import React from 'react';

import './App.css';


import {HashRouter as Router, Route,  Switch} from 'react-router-dom'

import Footer from "./sections/components/headerComponents/Footer";
import NavBar from './sections/components/headerComponents/navbar/NavBar';
import LandingPage from "./sections/pages/LandingPage";
import AddInternship from "./sections/pages/AddInternship";
import SearchPage from "./sections/pages/SearchPage";
import Support from "./sections/pages/Support";
import Profile from "./sections/pages/Profile";
import Favorite from "./sections/pages/Favorite";



function App() {
    return (
        <Router>
            <NavBar/>
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
