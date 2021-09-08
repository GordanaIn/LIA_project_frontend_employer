import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navBarRoot: {
            flexGrow: 1,
        },
        navBarMenuButton: {
            marginRight: theme.spacing(2),
        },
        navBarTitle: {
            flexGrow: 1,
        },
        menuColor:{
            color:'#fafafa'
        }

    }),
);
