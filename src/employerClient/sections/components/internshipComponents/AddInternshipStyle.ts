import { Theme} from "@mui/material/styles";

import {makeStyles,createStyles} from "@material-ui/core/styles";

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
                width:400,
                height:950,
            },
            username:{
                alignItems: 'center',
                marginTop: 30,
                marginLeft:122,
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
                marginLeft:142,
            },
        }),
    )
;
