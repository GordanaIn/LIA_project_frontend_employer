import React, {useState} from "react";
import { Button, IconButton, ThemeProvider} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import theme from "../../../Theme";
import DialogTitle from "@material-ui/core/DialogTitle";
import {InternshipVacancy, IVacantAdvert} from "../../interfaces/HandleInterface";
import {useStyles} from "../components/styles/LandingStyle";
import TextField from "@material-ui/core/TextField";
import ApiEmployerClient from "../api/ApiEmployerClient";
import {Link} from 'react-router-dom'

const EditInternship: React.FC<{ advert : IVacantAdvert | undefined }> = ({advert}) => {
    const [internshipId, setInternshipId] = useState(advert?.id);
    const [title, setTitle] = useState(advert?.title);
    const [description, setDescription] = useState(advert?.description);
    const [duration, setDuration] = useState(advert?.duration);
    const [datePosted, setDatePosted] = useState(advert?.datePosted);

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleProfileChange = () => {
        setOpen(false);
        const advert = {
            title: title,
            description: description,
            duration: duration,
            datePosted: datePosted
        }
        ApiEmployerClient.updateInternship(internshipId,advert).then(err=>alert("Edited Successfully")).catch(err => console.log(err));
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                <IconButton edge="end" arial-label="deletedit" color="secondary" onClick={handleClickOpen}>
                    <EditIcon/>
                </IconButton>
                <Dialog open={open} onClose={handleClose} arial-labelledby="form-dialog-title">
                   <DialogTitle className={classes.h1} id="form-dialog-title"> Edit Profile </DialogTitle>
                    <DialogContent className={classes.content}>
                        <div className={classes.username}>
                            <TextField id="standard-basic" label="Title" variant="standard" value={title}
                                       onChange={e => setTitle(e.target.value)}/>
                        </div>
                        <div className={classes.username}>
                            <TextField id="standard-basic" label="Description" variant="standard" value={description}
                                       onChange={e => setDescription(e.target.value)}/>
                        </div>

                        <div className={classes.username}>
                            <TextField id="standard-basic" label="Duration" variant="standard" value={duration}
                                       onChange={e => setDuration(e.target.value)}/>
                        </div>

                        <div className={classes.username}>
                            <TextField id="standard-basic"   type={"date"} label="datePosted" variant="standard" value={datePosted}
                                       onChange={e => setDatePosted(e.target.value)}/>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className={classes.button6}>
                            Cancel
                        </Button>

                        <Button onClick={handleProfileChange} className={classes.button}> <Link to="/displayProfile"
                                                                                                style={{
                                                                                                    textDecoration: 'none',
                                                                                                    color: "#fff"
                                                                                                }}>
                            Edit Profile </Link>
                        </Button>

                    </DialogActions>
            </Dialog>
        </ThemeProvider>
        </>
    );
}
export default EditInternship;