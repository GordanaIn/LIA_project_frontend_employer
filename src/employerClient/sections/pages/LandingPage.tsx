import { Paper } from "@mui/material";
import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "../components/styles/LandingStyle";



const LandingPage:FC<{}> = ():ReactElement => {
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();
    useEffect(() => {
        setLoading(false);
    },[]);


    const goToSignUp = () =>{
        setNavigation("signUp")
    }

    return(
        <div>
            <h1 data-testid="title" className={classes.titel}>Welcome to LiaLisera</h1>
            <Paper data-testid="text" className={classes.paper2}>
                This is a professional platform made to help students and companies in their search for internships.<br/>
                With the help of LiaLisera you can create and manage your own profile.
            </Paper>
        </div>

    );
}
export default LandingPage;
