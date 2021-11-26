import React, {FC, useState} from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {Button, Grid, Paper, TextField} from "@mui/material";
import {useStyles} from "../components/styles/AddInternshipStyle";
import ApiEmployerClient from "../api/ApiEmployerClient";
import RegisterButton from "../../button/RegisterButton";
import theme from "../../Theme";
import ListOfInternships from "../components/internshipComponents/ListOfInternships";
import {InternshipVacancy} from "../interfaces/NewHandleInterface";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const AddInternship: FC<{internship: InternshipVacancy}> = ({internship}) => {
    const classes = useStyles();
    const [userId, SetUserId] = useState('48f8f3c8-3649-4638-853b-07e58318a40e');
    const [employerName, setEmployerName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [datePosted, setDatePosted] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [duration, setDuration] = useState("");
    const [requiredNumber, setRequiredNumber] = useState("");


    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        let internshipVacancy= {
            userId:userId,
            employerName: employerName,
            title: title,
            description: description,
            datePosted: datePosted,
            contactPhone:contactPhone,
            duration:duration,
            requiredNumber:requiredNumber
        };
        console.log(internshipVacancy)
        ApiEmployerClient.saveInternship(internshipVacancy).then(res=>alert("Registration is successful")).catch(err=>console.log(err));
        //clear item
       clearItem();

    }
    const clearItem=()=>{
        setTitle(" ");
        setEmployerName(" ");
        setDescription(" ");
        setDatePosted(" ");
        setContactPhone(" ");
        setDuration(" ");
        setRequiredNumber(" ");
    }
    return (
        <ThemeProvider theme={theme}>
        <Grid className={classes.root}>

                <Paper elevation={3} className={classes.paper}>
                    <form   onSubmit={e => onSubmit(e)}>
                        <h3 className={classes.h3}> Add Internship</h3>
                        <div className={classes.cont}>
                            <div className={classes.username} >
                                <TextField className={classes.textfield} id="standard-basic" label="Contact Person Name" variant="standard"   value={employerName}
                                           onChange={e => setEmployerName(e.target.value)}/>
                            </div>
                            <div className={classes.username} >
                                <TextField id="standard-basic" label="Vacancy Title" variant="standard"   value={title}
                                           onChange={e => setTitle(e.target.value)}/>
                            </div>
                            <div className={classes.username} >
                                <TextField
                                    focused
                                    style={{marginLeft:'1%',textUnderlinePosition:'center', paddingLeft:20, paddingRight:20}}
                                    helperText="Job Description"
                                    multiline
                                    type={"text"}
                                    rows={4}
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                            <div className={classes.username} >
                                <TextField  type={"date"} id="standard-basic"  variant="standard"   value={datePosted}
                                           onChange={e => setDatePosted(e.target.value)}/>
                            </div>

                            <div className={classes.username} >
                                <TextField id="standard-basic" label="contactPhone" variant="standard" value={contactPhone}
                                           onChange={e => setContactPhone(e.target.value)} />
                            </div>

                            <div className={classes.password}>
                                <TextField id="standard-basic"  label="duration" variant="standard" value={duration}
                                           onChange={e => setDuration(e.target.value)}/>
                            </div>
                            <div className={classes.password}>
                                <TextField id="standard-basic"  label="Number of vacant places" variant="standard" value={requiredNumber}
                                           onChange={e => setRequiredNumber(e.target.value)}/>
                            </div>
                            <div>
                                <div className={classes.btn}>
                                    <RegisterButton />
                                </div>
                            </div>


                        </div>
                    </form>
                </Paper>
            <React.Fragment>
                <Button href={"/#/listOfInternship"} variant="contained"  className={classes.btn1}>
                    Go to List of Adverts<DoubleArrowIcon style={{color:"white"}}/>
                </Button>
            </React.Fragment>
                {/*<Paper  elevation={3} className={classes.paperList}>
                    <ListOfInternships internship={internship}/>
                </Paper>*/}
            </Grid>
        </ThemeProvider>
    );
}
export default AddInternship;
