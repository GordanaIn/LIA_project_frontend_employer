import React, {FC} from "react";
import footer from "./foto/footer.png";
import {useStyles} from "../navbar/stylesNav/NavStyle";


const FooterPhoto: FC<{}> = () =>{
    const classes = useStyles();
    return(
        <div className={classes.div}>
            <img src={footer} alt="" className={classes.logo1}/>
        </div>
    )

}
export default FooterPhoto;
