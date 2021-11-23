import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {Menu} from "@material-ui/core";
import {Link} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import theme from "../../../../../Theme";
import {ThemeProvider} from "@mui/material";
import {useStyles} from "./stylesNav/NavStyle";

export default function NavMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState < null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <div>
                <Button onClick={handleClick} className={classes.navBarMenu}>
                    <MenuIcon style={{fontSize:50, color:"#fff"}}  className={classes.navBarMenu}/>
                </Button>
                <Menu open={Boolean(anchorEl)}
                      id ="simple-menu"
                      color="secoundary"
                      keepMounted
                      anchorEl={anchorEl}
                      onClose={handleClose}>
                    <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/home"><HomeIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Home</Link></MenuItem>
                      <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/addInternship"><AddCircleOutlineIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Add Internship</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/search"><SearchIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Internships</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/profile"><PersonIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Profile</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/favorite"> <FavoriteIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/> Favorite</Link> </MenuItem>
                    <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/support"><SupportAgentIcon
                        style={{color: "#C1C4C8", marginRight: 6}}/>Support</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className={[classes.navBarMenuColor, classes.linkDecoration].join('')} style={{ textDecoration: 'none', color: 'inherit' }} to="/logout"><ExitToAppIcon
                            style={{color: "#C1C4C8", marginRight: 6}}/>Logout</Link></MenuItem>

                </Menu>
            </div>
        </div>
        </ThemeProvider>
    );
}
