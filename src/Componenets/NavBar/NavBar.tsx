import React from 'react';
import {AppBar, Grid, Toolbar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SimpleMenu from "./Menu";
import {useStyles} from "../Styles/Styles";
 import useWindowSize from "../CheekWindowSize/CheekWindowSize";


export default function NavBar() {
    const classes = useStyles();
    const { width, height } = useWindowSize()

    return (
        <div className={classes.navBarRoot}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.navBarMenuButton} color="inherit" aria-label="menu">
                        <SimpleMenu/>
                    </IconButton>
                    <Grid container
                          direction="row"
                          justify="space-around"
                          alignItems="center"
                    >
                        <Grid item>
                            Mina sidor {width}
                        </Grid>
                        <Grid item>
                            Skapa Annons
                        </Grid>
                        <Grid item>
                            Lia Sökare
                        </Grid>
                        <Grid item>
                            Favoriter
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}