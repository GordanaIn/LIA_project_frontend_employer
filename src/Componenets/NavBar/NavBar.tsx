import React, {useEffect, useState} from 'react';
import {AppBar, Grid, Toolbar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import NavMenu from "./NavMenu";
import {useStyles} from "../Styles/Styles";
import useWindowSize from "../CheekWindowSize/CheekWindowSize"; //kallar in funtion kollar window storlek
import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'


 const NavBar:React.FC<{}>=()=> {
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
                        {   cheeekWindowSize!== true?<NavMenu/>: null}
                    </IconButton>
                    <Grid container
                          direction="row"
                          justify="space-around"
                          alignItems="center"
                    >
                        {/*döljer text om windowa är bredare än 600*/}
                        <Grid item>
                            <p>text</p>
                            {/*texten är platshållare för Router länkar implementeras framöver*/}
                        </Grid>
                            {cheeekWindowSize!==false? <Link className={[classes.navBarMenuColor,classes.linkDecoration].join(' ')} to="/TestOne">Lia Sökar</Link> :null} //ändra "to=" till den önskade path
                        <Grid item>
                            {cheeekWindowSize!==false?  <Link className={[classes.navBarMenuColor,classes.linkDecoration].join(' ')} to="/TestTwo">Skapa Annons</Link> :null}
                        </Grid>
                        <Grid item>
                            {cheeekWindowSize!==false? <Link className={[classes.navBarMenuColor,classes.linkDecoration].join(' ')} to="/TestThree">Favoriter</Link> :null}
                        </Grid>
                        <Grid item>
                            {cheeekWindowSize!==false? "Mina Sidor" :null}
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export  default NavBar;