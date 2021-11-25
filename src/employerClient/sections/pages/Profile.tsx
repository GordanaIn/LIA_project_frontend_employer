import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "../components/styles/LandingStyle";



const Profile:FC<{}> = ():ReactElement => {
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();
    useEffect(() => {
        setLoading(false);
    },[]);


    return(
        <div className={classes.root}>
            <h1>Profile</h1>
        </div>

    );
}
export default Profile;
