import { Theme} from '@mui/material/styles';
import {createStyles, makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        loginButton: {
            alignItems:"center",
            margin: theme.spacing(1),
            backgroundColor:'#4C525C',
            color:"#fff"

        },
        registerButton:{
            alignItems:"center",
            margin: theme.spacing(1),
            backgroundColor:'#4C525C',
            color:"#fff",
        },

    }),
);
