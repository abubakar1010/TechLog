import { AcademicFaculty } from "../pages/admin/academicsManagement/AcademicFaculty";
import { AcademicSemester } from "../pages/admin/academicsManagement/AcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { CreateAdmin } from "../pages/admin/userManagement/CreateAdmin";
import { CreateFaculty } from "../pages/admin/userManagement/CreateFaculty";
import { CreateStudent } from "../pages/admin/userManagement/CreateStudent";

export const adminPaths = [
	{
		name: "Dashboard",
		path: "dashboard",
		element: <AdminDashboard />,
	},
	{
		name: "User Management",
		children: [
			{
				name: "Create Student",
				path: "create-student",
				element: <CreateStudent />,
			},
			{
				name: "Create Faculty",
				path: "create-faculty",
				element: <CreateFaculty />,
			},
			{
				name: "Create Admin",
				path: "create-admin",
				element: <CreateAdmin />,
			},
		],
	},
	{
		name: "Academic Management",
		children: [
			{
				name: "Academic Semester",
				path: "academic-semester",
				element: <AcademicSemester/>,
			},
			{
				name: "Academic Faculty",
				path: "academic-faculty",
				element: <AcademicFaculty/>,
			},
		],
	},
];
