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
            list :{
                background:'gray',
                width:400,
                height:200
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
                color:"black"
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
                marginTop:"1%",
                width:800,
                height:700

            },
            paper:{
                alignItems: 'center',
                justifyContent: 'center',
                width:500,
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
            input: {
                alignItems: "center",
            },

            button1: {
                alignItems: "center",
                margin: theme.spacing(1),
                marginLeft: 200,
                marginTop: -72
            },
            grid: {
                alignItems: "center",
                marginLeft: 50,
                marginTop:50
            },
            container:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:40
            },
            content:{
                alignItems: 'center',
                justifyContent: 'center',
                width: 500,
                height: 500
            },
            username: {
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 50,
                marginTop: 17,
            },
            button: {
                textAlign: 'center',
                marginLeft: 100,
                marginTop: 10,
                backgroundColor:"#1bc008"
            },
            button6: {
                color:"#fff",
                textAlign: 'center',
                marginLeft: 100,
                marginTop: 10,
                backgroundColor:"#c40606"
            },

        }),
    )
;
