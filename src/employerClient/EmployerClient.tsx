import React, {FC, ReactElement, useEffect, useState} from "react";
import {useStyles} from "./sections/components/landingStyle/LandingStyle";




const AddInternsip:FC<{}> = ():ReactElement => {
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();
    useEffect(() => {
        setLoading(false);
    },[]);



    return(
        <div className={classes.root}>

        </div>

    );
}
export default AddInternsip;
