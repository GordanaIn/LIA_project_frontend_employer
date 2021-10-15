import React, { useState} from 'react';
import {useStyles} from "./RegistrationFormStyle/RegistrationStyle";
import {Grid, Paper} from "@material-ui/core";

import UserService from '../../api/UserService';

enum ROLE {
    Student,
    Employee,
    Admin,
    User
}
interface Role {
    name: ROLE,
};

interface User {
    username: string,
    email: string,
    password:  string,
    role:Role,
};
const UserRegistration : React.FC<User> = () => {
    const classes = useStyles();
    //const [values, handleChanege] = useForm({username:"", email:"", password:"",role:{name:role.User}});
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [roles, setRoles] = useState();


    const defaulut_roles = [ROLE[0],ROLE[1],ROLE[2],ROLE[3]];
    const onSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        /* let user = {
             username: values.username,
             email: values.email,
             password: values.password,
             role: {
                 name:values.role
             },
         }*/
        let user = {
            username: username,
            email: email,
            password: password,
            role: roles
        }
        console.log(user);
        UserService.saveUser(user).then(res=>console.log(res)).catch(err=>console.log(err));
    }

    return (
        <Grid container spacing={4} className={classes.root}>
            <Paper elevation={3} style={{ width: 400, height: 400, background: 'white', }}>
                <form   onSubmit={e => onSubmit(e)}>
                    <h2 className={classes.h1} >Sign up</h2>
                    <div className="form-group">
                        <label className={classes.label} htmlFor="Username" >Username: </label>
                        <input className={classes.textBox} value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label className={classes.label} htmlFor="Email" >Email: </label>
                        <input className={classes.textBox} value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className={classes.label} > Password: </label>
                        <input type="password" className={classes.textBox} value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className={classes.label} > Roles : </label>
                        <select name="users" id="users" className={classes.combo} defaultValue={ROLE[2]} >
                            {
                                defaulut_roles.map( role=>(
                                        <option   value={role}  key={role} >
                                            {role}
                                        </option>
                                    )
                                )}
                        </select>
                    </div>
                    <div className="form-group">
                        <button className={classes.button} type="submit" >
                            Create User
                        </button>
                    </div>
                </form>
            </Paper>
        </Grid>
    );

}
export default UserRegistration;
