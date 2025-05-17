import { OfferedCourse } from "../pages/faculty/courseManagement/OfferedCourse";
import { FacultyDashboard } from "../pages/faculty/FacultyDashboard";
import { ManageStudent } from "../pages/faculty/studentManagement/ManageStudent";

export const facultyPaths = [
	{
		name: "Dashboard",
		path: "dashboard",
		element: <FacultyDashboard />,
	},
	{
		name: "Course Management",
		children: [
			{
				name: "Offered Course",
				path: "offered-course",
				element: <OfferedCourse />,
			},
		],
	},
	{
		name: "Student Management",
		children: [
			{
				name: "Students",
				path: "students",
				element: <ManageStudent />,
			},
		],
	},
];
