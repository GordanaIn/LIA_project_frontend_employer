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
                <Grid container spacing={2}>
                    <h1>Min sida</h1>

                    <Grid item xs={12} sm container>

                        <img className={classes.img} alt="image"
                             src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IhktLJTdu84H9WD4b_AufwHaEr%26pid%3DApi&f=1"/>

                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <div>
                                    What is Lorem Ipsum?
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.
                                </div>
                                <Typography variant="body2" gutterBottom>
                                    Full resolution 1920x1080 • JPEG
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