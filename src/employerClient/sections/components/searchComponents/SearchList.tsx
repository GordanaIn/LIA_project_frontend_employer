import React, {FC, ReactElement, useEffect, useState} from "react";
import theme from "../../../../Theme";
import {Button, Grid, Paper, TextField} from "@mui/material";
import {IStudent} from "../../../interfaces/HandleInterface";
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Theme} from "@mui/material/styles";
import {makeStyles, createStyles, ThemeProvider} from '@material-ui/core/styles';
import {useStyles} from "../styles/LandingStyle";
import ApiEmployerClient from "../../api/ApiEmployerClient";

const SearchList:FC<{student:IStudent}> = ({student})=> {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [navigation, setNavigation] = useState("landingPage");
    const [favs, setFavourites] = useState<Array<string> | any>();

    const  Edit= (student: any)=>{

    }
    const  Delete= (student: any)=>{

    }
    useEffect(() => {
        console.log(student)
       /* ApiStudentClient.getFavourite(userId).then(res => {
            console.log(res)
            setFavourites(res)
        }).catch(err => console.log(err));*/

    }, []);
    const changeFavoriteStatus = (student: any) => {
      /*console.log("Inside button event")
      if (favs?.includes(student.student.id)) {
          ApiEmployerClient.removeFavorite(userId, intern.id).then(result => {
                if (result)
                    setFavourites(favs.filter((item: string) => item !== intern.id));
            }).catch(err => console.log(err));
        } else {
          ApiEmployerClient.addFavorite(userId,  intern.id).then(result => {
                if (result) setFavourites([...favs, intern.id])
            }).catch(err => console.log(err));
        }*/
    }

    return(

    <ThemeProvider theme={theme}>
             <Grid  className={classes.root}>
                <List  className={classes.list}>
                  <ListItem style={{alignItems: "center", right: 100}}>
                    <ListItemSecondaryAction style={{alignItems: "center", marginBottom: -30}}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={favs?.includes(student?.studentId)}

                                                icon={<FavoriteBorderIcon/>}
                                                checkedIcon={<FavoriteIcon/>}
                                                onChange={( event)=>{changeFavoriteStatus(student)
                                                ;console.log("hello here")} }
                                            />}
                                        label=""
                                    />

                                </ListItemSecondaryAction>
                            </ListItem>
                            <div >
                                <div > FirstName: {student?.firstName}</div>
                                <div> LastName: {student?.lastName} </div>
                                <div> Email: {student?.email}</div>
                                <div> Phone: {student?.phone} </div>
                                <div> SchoolName: {student?.schoolName}</div>
                                <div> LinkedIn: {student?.linkedIn} </div>
                                </div>
                        </List>
               </Grid>
    </ThemeProvider>
    );
}
export default SearchList;
