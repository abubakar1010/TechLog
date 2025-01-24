import { TResponseDefault } from ".";
import { TName } from "./student.type";

export type TFaculty = {
	password: string;
	faculty: Faculty;
}  & TResponseDefault

export type Faculty = {
	designation: string;
	name: TName;
	gender: string;
	email: string;
	dateOfBirth: string;
	contactNo: string;
	emergencyContactNo: string;
	bloogGroup: string;
	presentAddress: string;
	permanentAddress: string;
	academicDepartment: string;
} & TResponseDefault

export const defaultFacultyData ={
    "designation":"Lecturer",
    "name": {
        "firstName": "Mridul ",
        "middleName": "Das",
        "lastName": "Rahman"
    },
    "gender":"male",
    "email":"faculty3@gmail.com",
    // "dateOfBirth": "1990-01-01",
    "contactNo": "123",
    "emergencyContactNo": "123",
    "bloogGroup": "A+",
    "presentAddress": "123 Main St, Cityville",
    "permanentAddress": "456 Oak St, Townsville",
    "academicDepartment":"65b00fb010b74fcbd7a25d8e"
}