import { Theme} from "@mui/material/styles";
import {makeStyles,createStyles,} from "@material-ui/core/styles";
export const useStyles = makeStyles((theme:Theme) =>
        createStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'white',
                '& > *': {
                    margin: theme.spacing(8),
                },
            },
            h1:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',

            },
            p:{
                justify:"center",
                alignItems:"center",
                textAlign:'center',
                marginLeft:10,

            },
            h3:{
                justify:"center",
                alignItems:"center",
                marginTop:40,


            },
            paper:{
                alignItems: 'center',
                justifyContent: 'center',
                width:400,
                height:500
            }

        }),
    )
;
