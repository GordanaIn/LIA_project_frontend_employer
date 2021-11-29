import { Theme} from "@mui/material/styles";

import {makeStyles,createStyles,} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme:Theme) =>
        createStyles({
            root: {
                alignItems: 'center',
                justifyContent: 'center',
                background: 'white',
                '& > *': {
                    margin: theme.spacing(8),
                },
            },
            h3:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',
            },
            p:{
                textAlign:'left',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft:110,

            },
            textfield:{
                alignItems: 'center',
                justifyContent: 'center',
            },
            paper:{
                justifyContent: 'center',
                alignItems: 'center',
                borderColor:"#2f2f31",
                border:3,
                marginLeft:350,
                width:700,
                height:700,
            },
            username:{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 50,
                marginTop: 30,
                paddingLeft:50
            },
            password:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 121,
            },
            h1:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',
            },
            label:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'left',
                marginLeft:20,
            },
            button1:{
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight:50,
                color: "secondary",
                marginLeft: 500,
                marginTop: 40,

            },
            button: {
                textAlign: 'center',
                marginLeft: 100,
                marginTop: 10,
                backgroundColor:"#1bc008"
            },
            button2:{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft:10,
                color: "secondary",
                marginTop: -270,
                marginBottom: 5,
            },
            button3:{
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft:10,
                color: "secondary",
                marginTop: 25,
                marginBottom: 10,
            },
            button4:{
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight:10,
                color: "secondary",
                marginTop: 20,
            },
            button5:{
                alignItems: 'center',
                justifyContent: 'center',
                color: "secondary",
                marginTop: 10,
                marginLeft:500
            },
            button6: {
                color:"#fff",
                textAlign: 'center',
                marginLeft: 100,
                marginTop: 10,
                backgroundColor:"#c40606"
            },
            button7:{
                alignItems: 'center',
                justifyContent: 'center',
                color: "secondary",
                marginTop: -105,
                marginLeft:100
            },
            photo:{
                alignItems: 'center',
                justifyContent: 'center',
                width: 100,
                height: 100,
                marginTop:-30,
                border: 30

            },
            textBox:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
            },
            combo:{
                alignItems: 'center',
                marginTop: 20,
            },
            btn:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                marginLeft: 140,
            },
            coloumn1:{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 120,
                marginTop: -100,
            },
            coloumn2:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -390,
                marginLeft: 350,
            },
            root5:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:100,

            },
            content:{
                alignItems: 'center',
                justifyContent: 'center',
                width: 500,
                height: 500
            }
        }),
   );
