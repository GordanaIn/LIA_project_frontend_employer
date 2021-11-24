import React, {useState} from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {Paper, TextField} from "@mui/material";
import {useStyles} from "../components/internshipComponents/AddInternshipStyle";
import ApiEmployerClient from "../api/ApiEmployerClient";
import RegisterButton from "../../button/RegisterButton";
import theme from "../../Theme";

const AddInternship: React.FC<{}> = () => {
    const classes = useStyles();
    const [userId, SetUserId] = useState('c7bead53-3499-405e-86f5-13e7b953fdd3');
    const [employerName, setEmployerName] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [datePosted, setDatePosted] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [duration, setDuration] = useState("");


    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        let internshipVacancy= {
            userId:userId,
            employerName: employerName,
            title: title,
            description: description,
            datePosted: datePosted,
            contactPhone:contactPhone,
            duration:duration
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
    }
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
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
                                <TextField  type={"text"} id="standard-basic" label=" Job Description" variant="standard"   value={description}
                                           onChange={e => setDescription(e.target.value)}/>
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
                            <div>
                                <div className={classes.btn}>
                                    <RegisterButton />
                                </div>
                            </div>


                        </div>
                    </form>
                </Paper>
            </div>
        </ThemeProvider>
    );
}
export default AddInternship;