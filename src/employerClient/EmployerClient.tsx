import React, {FC, ReactElement, useEffect, useState} from "react";
import {useStyles} from "./sections/components/styles/LandingStyle";
import theme from "../Theme";
import { ThemeProvider } from "@mui/material";




const AddInternsip:FC<{}> = ():ReactElement => {
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();
    useEffect(() => {
        setLoading(false);
    },[]);



    return(
        <ThemeProvider theme={theme}>
        <div className={classes.root}>

        </div>
        </ThemeProvider>
    );
}
export default AddInternsip;
