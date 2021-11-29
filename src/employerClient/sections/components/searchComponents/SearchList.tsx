import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "../../components/styles/LandingStyle";
import theme from "../../../../Theme";
import {Button, Grid, TextField, ThemeProvider } from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";



const SearchList:FC<{}> = ()=> {
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();

    useEffect(() => {
        setLoading(false);
    },[]);


    return(
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                    <Grid direction="row" className={classes.grid}>
                        <TextField
                            label="Search..."
                            variant="outlined"
                            id="search"
                            className={classes.input}
                            type="search"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button1}
                            type="submit"
                            style={{paddingTop: 52}}>
                            <SearchIcon style={{alignItems: "center", marginTop: -45, color:"#fff"}}/>
                        </Button>
                    </Grid>
            </div>
        </ThemeProvider>
    );
}
export default SearchList;
