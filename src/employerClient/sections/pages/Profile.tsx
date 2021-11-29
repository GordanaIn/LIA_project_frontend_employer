import React, {FC, ReactElement, useEffect, useState} from "react";

import { Paper} from "@material-ui/core";
import {TextField, ThemeProvider} from "@mui/material";
import theme from "../../../Theme";
import ApiEmployerClient from "../api/ApiEmployerClient";
import Button from "@material-ui/core/Button";
import {ICompany} from "../../interfaces/HandleInterface";
import {useStyles} from "../components/styles/ProfileStyle";
import EditProfile from "../components/registrationForm/EditProfile";

const Profile:FC<{}> = ():ReactElement => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [userId, SetUserId] = useState('80d27c88-5101-4374-b101-3d98bca220c0'); //userId with role Employer
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
                    {/*    <form onSubmit={e => onSubmit(e)}>*/}

                    <h1 className={classes.h3}> Company Profile</h1>

                    <div className={classes.root5}>
                        <div className={classes.coloumn1}>
                            <div className={classes.username}>
                                <TextField className={classes.textfield} id="standard-basic" variant="standard"
                                           value={company?.name}/>
                            </div>
                            <div className={classes.username}>
                                <TextField id="standard-basic" variant="standard" value={company?.orgNumber}/>
                            </div>
                            <div className={classes.username}>
                                <TextField id="standard-basic" variant="standard" value={company?.email}/>
                            </div>

                            <div className={classes.username}>
                                <TextField id="standard-basic" variant="standard" value={company?.companyEmail}/>
                            </div>

                        </div>
                    </div>


                    <div className={classes.button1}>
                        {company ?
                            <Button variant="contained" color="secondary" component="span">
                             <EditProfile company={company}/>Edit
                            </Button>
                            : null}
                    </div>

                </Paper>
            </div>
        </ThemeProvider>

    );
}
export default Profile;
