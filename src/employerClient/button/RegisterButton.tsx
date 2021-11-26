import React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from './buttonStyles/StylesButton';
import {ThemeProvider} from "@mui/material";
import theme from "../Theme";

export default function RegisterButton() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div >
                <Button
                    variant="contained"
                    className={classes.registerButton}
                    type="submit">
                    Register
                </Button>
            </div>
        </ThemeProvider>
   );
}
