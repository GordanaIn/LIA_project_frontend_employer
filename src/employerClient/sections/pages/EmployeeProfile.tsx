import React, {FC, ReactElement, useEffect, useState} from "react";
import {useStyles} from "../components/styles/ProfileStyle";
import {IEmployee} from "../../interfaces/HandleInterface";
import ApiEmployerClient from "../api/ApiEmployerClient";
import {TextField, ThemeProvider} from "@mui/material";
import theme from "../../../Theme";
import {Paper} from "@material-ui/core";
import EditEmployeeProfile from "./EditEmployeeProfile";

const EmployeeProfile:FC<{}> = ():ReactElement => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [userId, SetUserId] = useState('617f0037-d290-4ed2-841f-bf06f93c4d32');
    const [employee, setEmployee] = useState<IEmployee>();

    useEffect(() => {
        ApiEmployerClient.fetchEmployee(userId).then(setEmployee).catch(err => console.log(err));
    }, []);


    useEffect(() => {
        setLoading(false);
    },[]);


    return(
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Paper elevation={3} className={classes.paper1}>
                    <h1 className={classes.title}> Employee Profile</h1>
                    <div className={classes.root5}>
                        <div className={classes.coloumn1}>
                            <div className={classes.username}>
                                <TextField id="standard-basic" variant="standard" helperText="FirstName"
                                           value={employee?.firstName}/>
                            </div>
                            <div className={classes.username}>
                                <TextField id="standard-basic" variant="standard" helperText="LastName"
                                           value={employee?.lastName}/>
                            </div>
                           {/* <div className={classes.username}>
                                <TextField id="standard-basic" variant="standard" helperText="Email"
                                           value={employee?.email}/>
                            </div>*/}

                        </div>
                    </div>


                    <div className={classes.button1}>
                        {
                           employee ?
                            <EditEmployeeProfile employee={employee}/>
                            : null}
                    </div>
                </Paper>
            </div>

        </ThemeProvider>

    );
}
export default EmployeeProfile;
