import React, {useEffect, useState} from 'react';
import {AppBar, Grid, Toolbar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SimpleMenu from "./Menu";
import {useStyles} from "../Styles/Styles";
import useWindowSize from "../CheekWindowSize/CheekWindowSize"; //kallar in funtion kollar window storlek


export default function NavBar() {
    const classes = useStyles();
    const [cheeekWindowSize,seTcheeekWindowSize]=useState<boolean>();//har boolean värde:  är  störe en 600
    const {width, height} = useWindowSize() //  värdet av winwStorlek

    useEffect(()=>{
        //kollar om width mindre än 60
        width <600 ? seTcheeekWindowSize(false):seTcheeekWindowSize(true)
    })

    return (
        <div className={classes.navBarRoot}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.navBarMenuButton} color="inherit" aria-label="menu">
                        {   cheeekWindowSize!= true?<SimpleMenu/>: null}
                    </IconButton>
                    <Grid container
                          direction="row"
                          justify="space-around"
                          alignItems="center"
                    >
                        {/*döljer text om windowa är bredare än 600*/}
                        <Grid item>
                            {/*texten är platshållare för Router länkar implementeras framöver*/}
                        </Grid>
                            {cheeekWindowSize!=false? "Mina sidor" :null}
                        <Grid item>
                            {cheeekWindowSize!=false? "Skapa Annons" :null}
                        </Grid>
                        <Grid item>
                            {cheeekWindowSize!=false? "Studenter/Lia Sökare" :null}
                        </Grid>
                        <Grid item>
                            {cheeekWindowSize!=false? "Favoriter" :null}
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}