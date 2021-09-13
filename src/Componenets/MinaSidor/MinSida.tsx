import React from "react";
import {useStyles} from "../Styles/Styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {MinSidaInterface} from "../Interface/HandleInterface";

const MinSida: React.FC<MinSidaInterface> = ({
                                                 imageUrl,
                                                 companyInfo,
                                                 companyName,
                                                 email,
                                                 password,
                                                 userName
                                             }) => {
    const classes = useStyles();

    const clickHandler = () => {
        alert("Remove");
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container direction="column"
                      justifyContent="center"
                      alignItems="center" spacing={2}>
                    <h1>Min sida</h1>

                    <Grid item xs={12} sm container>

                        <img className={classes.img} alt="image"
                             src={imageUrl}/>

                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <div>
                                    {companyInfo}
                                </div>
                                <Typography variant="body2" gutterBottom>
                                    {companyName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ID: 1030114
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography onClick={clickHandler} variant="body2" style={{cursor: 'pointer'}}>
                                    ladda upp fil
                                </Typography>
                                <Typography onClick={clickHandler} variant="body2" style={{cursor: 'pointer'}}>
                                    Ändra företags namn
                                </Typography>
                                <Typography onClick={clickHandler} variant="body2" style={{cursor: 'pointer'}}>
                                    ändra E-mail
                                </Typography> <Typography onClick={clickHandler} variant="body2"
                                                          style={{cursor: 'pointer'}}>
                                Ändra password
                            </Typography>
                                <Typography onClick={clickHandler} variant="body2" style={{cursor: 'pointer'}}>
                                    ändra användare/företags namn
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">$19.00</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default MinSida;