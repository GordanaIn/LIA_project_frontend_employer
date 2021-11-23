import React, {FC, ReactElement, useEffect, useState} from "react";
import { useStyles } from "../components/landingStyle/LandingStyle";
import { ListItem, ListItemSecondaryAction, Paper, ThemeProvider} from "@mui/material";
import ApiEmployerClient from "../api/ApiEmployerClient";
import { List } from "@mui/icons-material";
import theme from "../../../Theme";
import {InternshipVacancy} from "../interfaces/NewHandleInterface";



const AddInternsip:FC<{internship: InternshipVacancy}> = ({internship}):ReactElement => {
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const classes = useStyles();
    const [internships, setInternships] = useState([internship]);

    useEffect(() => {
        setLoading(false);
    },[]);


    useEffect(() => {
        ApiEmployerClient.getInternships().then(setInternships).catch(err=>console.log(err));
    },[]);



    return(
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <Paper className={classes.paper2}>
            <div className={classes.div}>
            <h1>Add Internship to List</h1>
            </div>
                <h4 className={classes.h3}>List of Internships</h4>
                <List style={{alignItems: "center"}}>
                    {internships.map(intern =>

                        <ListItem style={{alignItems: "center", right: 50}}
                                  key={intern.id} >

                            <ListItemSecondaryAction style={{alignItems: "center", marginRight: -50}}>
                                {intern.title}
                                {intern.contactEmployer}
                            </ListItemSecondaryAction>
                        </ListItem>
                    )}
                </List>
            </Paper>
        </div>
        </ThemeProvider>
    );
}
export default AddInternsip;
