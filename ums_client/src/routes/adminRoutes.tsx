import { AcademicDepartment } from "../pages/admin/academicsManagement/AcademicDepartment";
import { AcademicFaculty } from "../pages/admin/academicsManagement/AcademicFaculty";
import { AcademicSemester } from "../pages/admin/academicsManagement/AcademicSemester";
import { CreateAcademicDepartment } from "../pages/admin/academicsManagement/CreateAcademicDepartment";
import { CreateAcademicFaculty } from "../pages/admin/academicsManagement/CreateAcademicFaculty";
import { CreateAcademicSemester } from "../pages/admin/academicsManagement/CreateAcademicSemester";
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
				name: "Create A. Faculty",
				path: "create-academic-faculty",
				element: <CreateAcademicFaculty />,
			},
			{
				name: "A. Faculty",
				path: "academic-faculty",
				element: <AcademicFaculty />,
			},
			{
				name: "Create A. Department",
				path: "create-academic-department",
				element: <CreateAcademicDepartment />,
			},
			{
				name: "A. Department",
				path: "academic-department",
				element: <AcademicDepartment />,
			},
			{
				name: "Create A. Semester",
				path: "create-academic-semester",
				element: <CreateAcademicSemester />,
			},
			{
				name: "A. Semester",
				path: "academic-semester",
				element: <AcademicSemester />,
			},
		],
	},
];
