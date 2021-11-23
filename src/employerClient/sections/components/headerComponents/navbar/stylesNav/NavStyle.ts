import {Theme} from "@mui/material/styles";
import {makeStyles,createStyles,} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>

        createStyles({
            root: {
                flexGrow: 1,
            },
            navBarMenuButton: {
                marginRight: theme.spacing(1),
            },
            navBarTitle: {
                flexGrow: 1,
                color:"#fff"
            },
            div:{
                justify:"center",
                alignItems:"center",
            },
            div2:{
                justify:"center",
                alignItems:"center",
            },
            div3:{
                justify:"center",
                alignItems:"center",
                marginTop:-140,
                marginLeft:1250
            },
            navBarMenu: {
                color: '#fafafa',
                marginLeft: theme.spacing(10),
                marginTop:20,

            },
            appBar:{
                width:220,
                height:130,
                marginTop: -193,
                alignItems:"center",


            },
            linkDecoration: {
                textDecoration: 'none',
                color:"#fff",
                marginRight: theme.spacing(10),
               marginTop: 20
            },
            dropDownMenuColor: {
                color: '#ffffff',
                backgroundColor:'#2165A4',
                marginRight: theme.spacing(2),
            },
            paper: {
                padding: theme.spacing(2),
                margin: 'auto',
                maxWidth: 500,
            },
            image: {
                width: 128,
                height: 128,
            },
            img: {
                margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
            },
            grid: {
                justify:"center",
                alignItems:"center",
                fontSize:18,
                marginTop: 50,
                marginRight:-59
            },
            sidenav: {
                background: "#011627",
                width: 240,
                left: '-100%',
                position: 'absolute',
                height: '100vh',
                padding: 30,
                transition: 'all 1s',
            },
            sidenavActive: {
                left: 0,
            },
            logo: {
                width: 260,
                height:190,
                marginLeft:-26,


            },
            logo1: {
                width: 220,
                height:140,
                marginLeft:20


            },
            headerSvg: {
                fontSize: 40,
            },
            main: {
                height: '90vh',
                display: ' flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: 'black',
            },
            navBarMenuColor:{
                color: '#fafafa'
            }
        }),
    )
;
