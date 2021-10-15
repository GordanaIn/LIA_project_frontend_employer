import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "../components/landingStyle/LandingStyle";



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
        <div className={classes.root}>
         <h1>Welcome</h1>
        </div>

    );
}
export default LandingPage;
