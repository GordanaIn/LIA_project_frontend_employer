import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import {ThemeProvider} from "@mui/material";
import theme from "../../../../Theme";
import FooterPhoto from "./logan/FooterPhoto";
import {useStyles} from "./navbar/stylesNav/NavStyle";



const Footer = () =>{
    const classes = useStyles();
    return(
        <ThemeProvider theme={theme}>
            <AppBar position="sticky" color="primary" style={{alignItems:"center",top:0, height:80}} sx={{ top: 'auto', bottom: 0 }}>
                <p style={{alignItems:"center"}}>Production LiaLisera</p>
                <Toolbar style={{alignItems:"center"}}>

            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )
}
export default Footer;
