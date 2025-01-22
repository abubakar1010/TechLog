export const defaultRegisterSemesterData = {
	academicSemester: "65b0104110b74fcbd7a25d92",
	status: "UPCOMING",
	startDate: "2025-01-10T04:00:01Z",
	endDate: "2025-04-24T17:59:59Z",
	minCredit: 6,
	maxCredit: 16,
};

export type TRegisteredSemester = {
	academicSemester: string;
	status: string;
	startDate: string;
	endDate: string;
	minCredit: number;
	maxCredit: number;
};
