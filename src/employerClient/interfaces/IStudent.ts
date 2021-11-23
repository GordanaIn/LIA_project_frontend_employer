export default interface IStudent {
    id:number;
    firstName: string;
    lastName: string;
    email:string;
    phone:string;
    linkedInLink:string;
    school:string;
    eduction:string;
    user:{
        username:string;
        password:string;
    }
}
export  interface IUser{
    id:number;
    username:string;
    password:string;

}
