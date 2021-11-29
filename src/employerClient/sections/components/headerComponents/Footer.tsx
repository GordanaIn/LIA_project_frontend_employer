import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import {BottomNavigation, CssBaseline, Paper, ThemeProvider} from "@mui/material";
import theme from "../../../../Theme";
import {useStyles} from "./navbar/stylesNav/NavStyle";


const Footer = () =>{
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Paper  style={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                <BottomNavigation style={{alignItems: "center", height: 80, backgroundColor:"#4C525C"}}
                                  showLabels value={value}
                                  onChange={(event, newValue) => {setValue(newValue);}}
                >
                    <p style={{alignItems: "center",color:"white"}}>Production LiaLisera</p>
                </BottomNavigation>
            </Paper>
        </ThemeProvider>
    )
}
export default Footer;
