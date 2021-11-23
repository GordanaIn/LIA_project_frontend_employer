import React from "react";

export interface Address {
    id:string;
    street: string;
    postCode: string;
    city: string;
}
export interface Person {
    id:string;
    fName: string;
    lName: string;
    email: string;
    phone?: string;
    street: string;
    postCode: string;
    city: string;

}
export interface Role {
    id:string;
    name: string;
}
export interface PersonRole {
    id:string;
    person: Person;
    role: Role;
}
export interface PersonDocument {
    id:string;
    person: Person;
    document: Document;
}
export interface Document {
    id:string;
    documentUrl: string;
    type: DocumentType;
}
export interface DocumentType {
    id:string;
    name: string;
}

export interface Student {
    id:string;
    person: Person;
    linkedInLink:string;
    school:string;
    approved?:boolean;
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
    role:string;
    schoolName:String;
    eductionTitle:String;
    educationType:String;
}
export interface InternshipVacancy{
    id:string;
    contactEmployer:string;
    title:string;
    description:string;
    status:string;
    datePosted:string;
    contactPhone:string;
    duration:string;
}
