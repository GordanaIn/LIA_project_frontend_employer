import React, {FC, useEffect, useState} from 'react';
import { ThemeProvider} from '@material-ui/core/styles';
import theme from "../../../../Theme";
import {useStyles} from "../landingStyle/LandingStyle";
import ApiEmployerClient from "../../api/ApiEmployerClient";




const AddToList: React.FC<{}> = () => {
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();
    const [internships, setInternships] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    },[]);
    //let {title, description}=internship;

    useEffect(() => {
        ApiEmployerClient.getInternships().then(setInternships).catch(err=>console.log(err));
    },[]);


    return(
        <ThemeProvider theme={theme}>
            <div className={classes.root}>


            </div>
        </ThemeProvider>
    )}
export default AddToList;
