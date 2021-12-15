import React, {FC, ReactElement, useEffect, useState} from "react";
import {useStyles} from "../components/styles/LandingStyle";
import theme from "../../../Theme";
import SearchList from "../components/searchComponents/SearchList";
import ApiEmployerClient from "../api/ApiEmployerClient";
import {IStudent} from "../../interfaces/HandleInterface";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Button, TextField, ThemeProvider} from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";

const SearchPage:FC<{}> = (): ReactElement => {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const [students, setStudents] = useState<IStudent[]>();


    useEffect(() => {
        ApiEmployerClient.fetchStudent().then(setStudents).catch(err => console.log(err));
    },[]);


    return (
        <ThemeProvider theme={theme}>
         <Paper className={classes.paper2}>
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
                        <Grid container spacing={1}>

                            {
                                students?.map((student,index) =>(
                                    <div key={index} className={classes.root}  >
                                        <SearchList student={student} />
                                    </div>

                                ))
                            }
                            { students?.length === 0 && <p>Hittade inga anonser som matchade din sökning</p>}
                        </Grid>
               </Paper>
        </ThemeProvider>
    );
}
export default SearchPage;
