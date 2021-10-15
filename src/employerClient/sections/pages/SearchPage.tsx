import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "../components/landingStyle/LandingStyle";



const SearchPage:FC<{}> = ():ReactElement => {
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();
    useEffect(() => {
        setLoading(false);
    },[]);


    return(
        <div className={classes.root}>
            <h1>Search School or Student</h1>
        </div>

    );
}
export default SearchPage;
