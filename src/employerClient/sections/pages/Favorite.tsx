import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "../components/styles/LandingStyle";
import theme from "../../../Theme";
import { ThemeProvider } from "@mui/material";



const Favorite:FC<{}> = ():ReactElement => {
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();
    useEffect(() => {
        setLoading(false);
    },[]);


    return(
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <h1>List of Favorite</h1>
        </div>
        </ThemeProvider>
    );
}
export default Favorite;
