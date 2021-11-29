import React, {FC, ReactElement} from "react";
import {useStyles} from "../components/styles/LandingStyle";
import theme from "../../../Theme";
import {Paper, TextField, ThemeProvider,Button} from "@material-ui/core";
import Box from "@mui/material/Box";




const Support:FC<{}> = ():ReactElement => {
    const classes = useStyles();

    return(
        <ThemeProvider theme={theme}>
            <Paper className={classes.paper1}>
                <h2 className={classes.h2}>Support</h2>
                <Box
                    sx={{
                        display: 'flow',
                        alignItems: 'center',
                        '& > :not(style)': { m: 5 },
                    }}
                >
                    <div className={classes.support}>
                        <TextField
                            style={{ marginInlineStart:10, paddingLeft:20, paddingRight:20}}
                            id="demo-helper-text-misaligned"
                            helperText="Enter your name"
                            color="primary"
                            focused
                            type="input" />
                    </div>
                    <div className={classes.support}>
                        <TextField
                            style={{ paddingLeft:20, paddingRight:20, textAlign:"center",textJustify:'auto'}}
                            id="demo-helper-text-misaligned"
                            color="primary"
                            type='input'
                            focused
                            helperText="Enter your email"
                        />
                    </div>
                    <div className={classes.support}>
                        <TextField
                            focused
                            style={{marginLeft:'1%',textUnderlinePosition:'center', paddingLeft:20, paddingRight:20}}
                            helperText="Enter your note here"
                            multiline
                            type="input"
                            rows={4}
                        />
                    </div>
                    <Button href={"/#/home"} variant="contained" color="secondary" className={classes.btn}>
                        SEND
                    </Button>
                </Box>
            </Paper>
        </ThemeProvider>
    );
}
export default Support;
