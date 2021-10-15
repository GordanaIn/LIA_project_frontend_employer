import React, {FC} from "react";
import LoganNew from "./foto/loganNew.png";
import {useStyles} from "../navbar/stylesNav/NavStyle";

const Logo: FC<{}> = () =>{
    const classes = useStyles();
    return(
        <div className={classes.div}>
            <img src={LoganNew} alt="" className={classes.logo}/>
        </div>
    )

}
export default Logo;
