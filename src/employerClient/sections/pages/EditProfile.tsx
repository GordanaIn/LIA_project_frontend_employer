import {ICompany} from "../../interfaces/HandleInterface";
import { DialogActions, DialogContent, IconButton, Paper, TextField, ThemeProvider} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import theme from "../../../Theme";
import {useState} from "react";
import {useStyles} from "../components/styles/ProfileStyle";
import ApiEmployerClient from "../api/ApiEmployerClient";
import EditIcon from "@material-ui/icons/Edit";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {Link} from 'react-router-dom'

const EditProfile: React.FC<{ company: ICompany  }> = ({company}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState('617f0037-d290-4ed2-841f-bf06f93c4d32');
    const [name, setName] = useState(company?.name);
    const [orgNumber, setOrgName] = useState(company?.orgNumber);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleProfileChange = () => {

        setOpen(false);
        const company = {
            name: name,
            orgNumber: orgNumber,
            userId:userId
            /*,
            companyEmail:companyEmail,
            email: email,
            username:username*/
        }
        ApiEmployerClient.updateCompanyInfo(company).then(res=>alert("Edited Successfully")).catch(err => console.log(err));
        console.log(company)
    }


    return(
        <>
            <ThemeProvider theme={theme}>
                <IconButton edge="end" arial-label="deletedit" color="secondary" onClick={handleClickOpen}>
                    <EditIcon/>
                </IconButton>
                <Dialog open={open} onClose={handleClose} arial-labelledby="form-dialog-title">
                    <DialogTitle className={classes.h1} id="form-dialog-title"> Edit Profile </DialogTitle>
                    <DialogContent className={classes.content}>
                        <div className={classes.username}>
                            <TextField id="standard-basic" label=" Name" variant="standard" value={name}
                                       onChange={e => setName(e.target.value)}/>
                        </div>
                   </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className={classes.button6}>
                            Cancel
                        </Button>

                        <Button onClick={handleProfileChange} className={classes.button}>
                            <Link to="/displayProfile" style={{
                                                  textDecoration: 'none',
                                                       color: "#fff"}}>
                            Edit Profile </Link>
                        </Button>

                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </>
    );
}

export  default EditProfile;
