import React, {FC, ReactElement} from "react";
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../components/styles/LandingStyle";
import {ThemeProvider} from "@mui/material";
import theme from "../../../Theme";



const Support:FC<{}> = ():ReactElement => {
    const classes = useStyles();

    return(
        <ThemeProvider theme={theme}>
        <div className={classes.root} >
                <h1 className={classes.h3}>Support</h1>
                <p className={classes.p}>The page is under construct </p>
        </div>
        </ThemeProvider>
    );
}
export default Support;
