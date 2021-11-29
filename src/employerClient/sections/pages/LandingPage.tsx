import {Button, Paper, ThemeProvider } from "@mui/material";
import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "../components/styles/LandingStyle";
import theme from "../../../Theme";
import img from "../components/headerComponents/logan/foto/employers.png";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

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
        <ThemeProvider theme={theme}>
        <div className={classes.titel}>
            <h1 data-testid="title" className={classes.titel}>Welcome to LiaLisera</h1>
            <div className={classes.paper3}>
            <Paper >
                <h2 className={classes.titel}>Good to have you here!</h2>
                <h4 className={classes.text}>
                    This is a professional platform made to help companies and students in their search for internships.<br/>
                    With the help of LiaLisera you can create and manage your own profile and you can creat adverteise of internsip <br/> Try it yourself and find student.
                    <br/> If there is any problem, feel free to contact us in support.<br/> Good Luck and have fun!!! </h4>
                <React.Fragment>
                    <Button href={"/#/addInternship"} variant="contained" color="secondary" className={classes.btn}>
                        Get Started <DoubleArrowIcon style={{color:"white"}}/>
                    </Button>
                </React.Fragment>
            </Paper>
            </div>
        </div>
             <div className={classes.con}>
            <img src={img} alt="" className={classes.img}/>
        </div>
        </ThemeProvider>
    );
}
export default LandingPage;
