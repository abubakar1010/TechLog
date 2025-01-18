export type TRootStudent =  {
	password: string;
	student: TStudent;
}

export type TStudent =  {
	name: TName;
	gender: "male" | "female";
	dateOfBirth: string;
	email: string;
	contactNo: string;
	emergencyContactNo: string;
	bloogGroup: string;
	presentAddress: string;
	permanentAddress: string;
	guardian: TGuardian;
	localGuardian: TLocalGuardian;
	admissionSemester: string;
	academicDepartment: string;
}

export type TName =  {
	firstName: string;
	middleName: string;
	lastName: string;
}

export type TGuardian =  {
	fatherName: string;
	fatherOccupation: string;
	fatherContactNo: string;
	motherName: string;
	motherOccupation: string;
	motherContactNo: string;
}

export type TLocalGuardian =  {
	name: string;
	occupation: string;
	contactNo: string;
	address: string;
}
