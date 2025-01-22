import { AcademicDepartment } from "../pages/admin/academicsManagement/AcademicDepartment";
import { AcademicFaculty } from "../pages/admin/academicsManagement/AcademicFaculty";
import { AcademicSemester } from "../pages/admin/academicsManagement/AcademicSemester";
import { CreateAcademicDepartment } from "../pages/admin/academicsManagement/CreateAcademicDepartment";
import { CreateAcademicFaculty } from "../pages/admin/academicsManagement/CreateAcademicFaculty";
import { CreateAcademicSemester } from "../pages/admin/academicsManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { Courses } from "../pages/admin/courseManagement/Courses";
import { CreateCourse } from "../pages/admin/courseManagement/CreateCourse";
import { OfferCourse } from "../pages/admin/courseManagement/OfferCourse";
import { RegisteredSemester } from "../pages/admin/courseManagement/RegisteredSemester";
import { RegisterSemester } from "../pages/admin/courseManagement/RegisterSemester";
import { Admins } from "../pages/admin/userManagement/admin/Admins";
import { CreateAdmin } from "../pages/admin/userManagement/admin/CreateAdmin";
import { CreateFaculty } from "../pages/admin/userManagement/faculty/CreateFaculty";
import { Faculties } from "../pages/admin/userManagement/faculty/Faculties";
import { CreateStudent } from "../pages/admin/userManagement/student/createStudent/CreateStudent";
import { Students } from "../pages/admin/userManagement/student/Students";
import { OfferedCourse } from "../pages/faculty/courseManagement/OfferedCourse";

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
				name: "Students",
				path: "students",
				element: <Students />,
			},
			{
				path: "student-update/:studentId",
				element: <Students />,
			},
			{
				name: "Create Faculty",
				path: "create-faculty",
				element: <CreateFaculty />,
			},
			{
				name: "Faculties",
				path: "faculties",
				element: <Faculties />,
			},
			{
				name: "Create Admin",
				path: "create-admin",
				element: <CreateAdmin />,
			},
			{
				name: "Admins",
				path: "admins",
				element: <Admins />,
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
	{
		name: "Course Management",
		children: [
			{
				name: "Offer N. Course",
				path: "offer-course",
				element: <OfferCourse />,
			},
			{
				name: "Offered Course",
				path: "offered-course",
				element: <OfferedCourse />,
			},
			{
				name: "Register N. Semester",
				path: "register-semester",
				element: <RegisterSemester />,
			},
			{
				name: "Registered Semester",
				path: "registered-semester",
				element: <RegisteredSemester />,
			},
			{
				name: "Create A. Course",
				path: "create-course",
				element: <CreateCourse />,
			},
			{
				name: "Courses",
				path: "courses",
				element: <Courses />,
			},
		],
	},
];
