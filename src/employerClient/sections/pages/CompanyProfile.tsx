import React, {FC, ReactElement, useEffect, useState} from "react";
import { Paper} from "@material-ui/core";
import {TextField, ThemeProvider} from "@mui/material";
import theme from "../../../Theme";
import ApiEmployerClient from "../api/ApiEmployerClient";
import Button from "@material-ui/core/Button";
import {ICompany} from "../../interfaces/HandleInterface";
import {useStyles} from "../components/styles/ProfileStyle";
import EditProfile from "./EditProfile";

const CompanyProfile:FC<{}> = ():ReactElement => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [userId, SetUserId] = useState('617f0037-d290-4ed2-841f-bf06f93c4d32');
    const [company, setCompany] = useState<ICompany>();

    useEffect(() => {
        ApiEmployerClient.fetchCompany(userId).then(setCompany).catch(err => console.log(err));
    }, []);


    useEffect(() => {
        setLoading(false);
    },[]);


    return(
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Paper elevation={3} className={classes.paper}>
                    <h1 className={classes.title}> Company Profile</h1>
                    <div className={classes.root5}>
                        <div className={classes.coloumn1}>
                            <div className={classes.username}>
                                <TextField id="standard-basic" variant="standard" helperText="Name"
                                           value={company?.name}/>
                            </div>
                            <div className={classes.username}>
                                <TextField id="standard-basic" helperText="Company orgNumber" variant="standard" value={company?.orgNumber}/>
                            </div>

                        </div>
                    </div>


                    <div className={classes.button1}>
                        {company ?
                                    <EditProfile company={company}/>
                                    : null}
                    </div>
                </Paper>
            </div>

        </ThemeProvider>

    );
}
export default CompanyProfile;
