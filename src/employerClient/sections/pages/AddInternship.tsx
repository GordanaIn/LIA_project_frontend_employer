import React, {FC, useState} from "react";
import {Grid, TableCell, TableHead, TableRow} from "@mui/material";
import {useStyles} from "../components/styles/AddInternshipStyle";
import ApiEmployerClient from "../api/ApiEmployerClient";
import RegisterButton from "../../button/RegisterButton";
import theme from "../../../Theme";
import {InternshipVacancy} from "../interfaces/NewHandleInterface";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import {Paper, TextField, ThemeProvider,Button} from "@material-ui/core";



const AddInternship: FC<{internship: InternshipVacancy}> = ({internship}) => {
    const classes = useStyles();
    const [userId, SetUserId] = useState('2ff94b34-9143-4231-a92d-5ea8a6c5561a'); //employer userId
    const [employerName, setEmployerName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [datePosted, setDatePosted] = useState("");
    const [duration, setDuration] = useState("");
    const [requiredNumber, setRequiredNumber] = useState("");


    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        let internshipVacancy= {
            userId:userId,
            employerName: employerName,
            title: title,
            description: description,
            datePosted: datePosted,
            duration:duration,
            requiredNumber:requiredNumber
        };
        console.log(internshipVacancy)
        ApiEmployerClient.addInternship(internshipVacancy).then(res=>alert("Registration is successful")).catch(err=>console.log(err));
        //clear item
       clearItem();

    }
    const clearItem=()=>{
        setTitle(" ");
        setEmployerName(" ");
        setDescription(" ");
        setDatePosted(" ");
        setDuration(" ");
        setRequiredNumber(" ");
    }
    return (
        <ThemeProvider theme={theme}>
             <Grid className={classes.root} sx={{width: '100%'}}>
                <Paper elevation={3} className={classes.paper}>
                    <form onSubmit={e => onSubmit(e)}>
                        <h1 className={classes.h3}> Add Internship</h1>
                        <div className={classes.cont}>
                            <div className={classes.username0} >
                                <TextField style={{ paddingLeft:20, paddingRight:20, textAlign:"center",textJustify:'auto'}}
                                           id="demo-helper-text-misaligned"
                                           color="primary"
                                           type='input'
                                           focused
                                           helperText="Enter Employer name"  value={employerName}
                                           onChange={e => setEmployerName(e.target.value)}
                                />
                            </div>
                            <div className={classes.username0} >
                                <TextField style={{ paddingLeft:20, paddingRight:20, textAlign:"center",textJustify:'auto'}}
                                           id="demo-helper-text-misaligned"
                                           color="primary"
                                           type='input'
                                           focused
                                           helperText="Enter Title" value={title}
                                           onChange={e => setTitle(e.target.value)}
                                />
                            </div>
                            <div className={classes.username0}>
                                <TextField   style={{ paddingLeft:20, paddingRight:20, textAlign:"center",textJustify:'auto'}}
                                             id="demo-helper-text-misaligned"
                                             color="primary"
                                             type='input'
                                             focused
                                             helperText="Enter Duration"
                                            value={duration}
                                            onChange={e => setDuration(e.target.value)}
                                />
                            </div>
                            <div className={classes.username0}>
                                <TextField   style={{ paddingLeft:20, paddingRight:20, textAlign:"center",textJustify:'auto'}}
                                             id="demo-helper-text-misaligned"
                                             color="primary"
                                             type='input'
                                             focused
                                             helperText="Enter Required number"
                                             value={requiredNumber}
                                           onChange={e => setRequiredNumber(e.target.value)}
                                />
                            </div>
                            <div className={classes.username0} >
                                <TextField  type={"date"}
                                            style={{ paddingLeft:20, paddingRight:20, textAlign:"center",textJustify:'auto'}}
                                            id="demo-helper-text-misaligned"
                                            color="primary"
                                            focused
                                            helperText="Enter Date"  value={datePosted}
                                            onChange={e => setDatePosted(e.target.value)}
                                />
                            </div>
                            <div className={classes.username1} >
                                <TextField
                                    focused
                                    style={{marginLeft:'1%',textUnderlinePosition:'center'}}
                                    helperText="Enter your note here"
                                    multiline
                                    type="input"
                                    rows={4}
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>
                                <div className={classes.btn} onClick={() => onSubmit}>
                                    <RegisterButton   />
                                </div>
                            </div>
                        <React.Fragment>
                            <Button href={"/#/listOfInternship"} variant="contained"  color="secondary" className={classes.btn1}>
                                Go to List of Adverts<DoubleArrowIcon style={{color:"white"}}/>
                            </Button>
                        </React.Fragment>
                    </form>
                </Paper>
            </Grid>
        </ThemeProvider>
    );
}
export default AddInternship;
