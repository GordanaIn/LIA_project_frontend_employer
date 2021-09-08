import React, {useEffect, useState} from 'react';
import {AppBar, Grid, Toolbar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SimpleMenu from "./Menu";
import {useStyles} from "../Styles/Styles";
import useWindowSize from "../CheekWindowSize/CheekWindowSize";


export default function NavBar() {
    const classes = useStyles();
    const [cheeekWindowSize,seTcheeekWindowSize]=useState<boolean>();
    const {width, height} = useWindowSize()

    useEffect(()=>{
        width <600 ? seTcheeekWindowSize(false):seTcheeekWindowSize(true)
    })

    return (
        <div className={classes.navBarRoot}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.navBarMenuButton} color="inherit" aria-label="menu">
                        {   cheeekWindowSize!= true?<SimpleMenu/>: ""}
                    </IconButton>
                    <Grid container
                          direction="row"
                          justify="space-around"
                          alignItems="center"
                    >
                        <Grid item>
                            {cheeekWindowSize!=false? "Mina sidor" :""}
                        </Grid>
                        <Grid item>
                            {cheeekWindowSize!=false? "Skapa Annons" :""}
                        </Grid>
                        <Grid item>
                            {cheeekWindowSize!=false? "Studenter/Lia Sökare" :""}
                        </Grid>
                        <Grid item>
                            {cheeekWindowSize!=false? "Favoriter" :""}
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}