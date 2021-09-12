import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";
import {useStyles} from "../Styles/Styles";
import {Link} from 'react-router-dom'

export default function NavMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon className={classes.navBarMenuColor}/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link
                    className={[classes.dropDownMenuColor, classes.linkDecoration].join(' ')} to="/TestOne">Lia
                    Sökar</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link
                    className={[classes.dropDownMenuColor, classes.linkDecoration].join(' ')} to="/TestTwo">Skapa
                    Annons</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link
                    className={[classes.dropDownMenuColor, classes.linkDecoration].join(' ')} to="/TestThree">Favoriter</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link
                    className={[classes.dropDownMenuColor, classes.linkDecoration].join(' ')} to="/TestThree">Mina
                    Sidor</Link></MenuItem>
            </Menu>
        </div>
    );
}