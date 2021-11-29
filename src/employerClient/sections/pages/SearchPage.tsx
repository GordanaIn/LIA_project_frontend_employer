import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "../components/styles/LandingStyle";
import theme from "../../../Theme";
import {Button, Grid, Paper, TextField, ThemeProvider } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import {Wallpaper} from "@mui/icons-material";
import SearchList from "../components/searchComponents/SearchList";



const SearchPage:FC<{}> = ():ReactElement => {
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();
    useEffect(() => {
        setLoading(false);
    },[]);


    return(
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <Paper className={classes.div}>
                <h1 className={classes.titel}>Search School or Student</h1>
                <div className={classes.p}>
            <SearchList />
                </div>
            </Paper>
        </div>
        </ThemeProvider>
    );
}
export default SearchPage;
