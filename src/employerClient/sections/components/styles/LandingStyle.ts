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
                justifyContent: 'center',
                alignItems:"center",
                textAlign:'center',
                marginLeft:10,

            },
            h3:{
                justifyContent: 'center',
                alignItems:"center",
                marginTop:40,


            },
            h2: {
                alignItems: 'center',
                textAlign: 'center',
                color: 'black'
            },
            div:{
                justifyContent: 'center',
                alignItems:"center",
            },
            paper:{
                alignItems: 'center',
                justifyContent: 'center',
                width:400,
                height:500
            },
            paper3:{
                background: 'transparent',
                color: 'white',
                border:59,
                borderRadius:20,
                borderColor:"#4C525C",
                marginTop:'10%',
                marginLeft:'5%',
                marginRight:'50%',
            },
            paper1: {
                background: 'transparent',
                paddingBottom: '5%',
                textAlign: 'center',
                padding: theme.spacing(6),
                color: theme.palette.text.secondary,
                alignItems: "center",
            },
            img:{
                alignItems: "center",
                width:500,
                height:500,
            },
            text:{
                alignItems: 'center',
                textAlign: 'center',
                color: 'black',

            },
            con:{
                alignItems: 'center',
                marginTop:'-17%',
                marginLeft:'60%',
            },
            titel:{
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'black'
            },
            paper2:{
                justifyContent: 'center',
                alignItems:"center",
                background: 'transparent',
                color: 'white',
                paddingBottom: '5%',
                paddingLeft: '5%',
                paddingRight: '5%',
                textAlign: 'center'
            },
            btn:{

                underline:"none",
                alignItems: 'center',
                borderRadius: 20,
                marginBottom:'10%'
            },
            support:{
                alignItems: 'center',
                marginTop:'5%'
            },


        }),
    )
;
