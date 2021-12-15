
export interface InternshipVacancy{
    id : string;
    contactEmployer:string;
    title:string;
    description:string;
    status:string;
    datePosted:any;
    contactPhone:string;
    duration:string;
    requiredNumber:number;
    orgNumber:string;
}
export interface IVacantAdvert {
    id:string;
    title : string;
    description : string;
    duration : string;
    status : string;
    datePosted : string;
    contactEmployer : string;
    numberAvailablePositions : string;
}
export interface ICompany{
    name:string;
    orgNumber:string;
    companyEmail:string;
    userId:string;
    username:string;
    password:string;
    email:string;
    phone:string;
    role:string;
}
export interface IEmployee{
    firstName:string;
    lastName:string;
    email:string;
    userId:string;
}

export default interface IAdds {

    title: string;
    description: string;
    id: number;
    created: Date;
    updated: Date;
    favourite: boolean,

}

export interface IStudent{
    studentId:string;
    firstName:string;
    lastName:string;
    userId:string;
    username:string;
    password:string;
    email:string;
    phone:string;
    linkedIn:string;
    schoolName:string;

}