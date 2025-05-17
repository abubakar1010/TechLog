export type TAdmin = {
	password: string;
	admin: Admin;
};

export type Admin = {
	designation: string;
	name: Name;
	gender: string;
	dateOfBirth: string;
	email: string;
	contactNo: string;
	emergencyContactNo: string;
	bloogGroup: string;
	presentAddress: string;
	permanentAddress: string;
};

export interface Name {
	firstName: string;
	middleName: string;
	lastName: string;
}
