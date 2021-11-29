import { Theme} from "@mui/material/styles";

import {makeStyles,createStyles} from "@material-ui/core/styles";
import {styled, TableCell, tableCellClasses, TableRow} from "@mui/material";

export const useStyles = makeStyles((theme:Theme) =>
        createStyles({
            root: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'white',
                '& > *': {
                    margin: theme.spacing(1),
                },
            },
            container:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:40
            },
            tableBody:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop:100
            },
            tabel:{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                backgroundColor:'#4C525C',
                marginRight: theme.spacing(1),
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
                marginLeft:105,

            },
            textfield:{
                alignItems: 'center',
                justifyContent: 'center',

            },
            paper:{
                alignItems: 'center',
                justifyContent: 'center',
                width:900,
                height:750,
            },
            paperList:{
                alignItems: 'center',
                justifyContent: 'center',
                width:1100,
                height:750,
            },
            username:{
                alignItems: 'center',
                marginTop: 30,
                marginLeft:122,
            },
            username0:{
                alignItems: 'center',
                marginTop: 30,
                marginLeft:345,
            },
            username1:{
                alignItems: 'center',
                marginTop: 30,
                marginLeft:355,

            },

            password:{
                alignItems: 'center',
                marginTop: 30,
                marginLeft:122,
            },
            h1:{
                alignItems: 'center',
                justifyContent: 'center',
                textAlign:'center',
            },
            label:{
                alignItems: 'center',
                textAlign:'left',
                marginLeft:20,
            },
            button:{
                alignItems: 'center',
                justifyContent: 'center',
            },
            cont:{
                alignItems: 'center',
                justifyContent: 'center',
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
                marginLeft:390,
            },
            btn1:{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -80,
                marginLeft:582,
                color:"#fff"
            },
            tablecall:{
                [`&.${tableCellClasses.head}`]: {
                    backgroundColor: '#4C525C',
                    color:"white",
                },
                [`&.${tableCellClasses.body}`]: {
                    fontSize: 14,
                },
            },
            tableRow:{
                '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.action.hover,
                },
                // hide last border
                '&:last-child td, &:last-child th': {
                    border: 0,
                },
            }
        }),
    )
;

