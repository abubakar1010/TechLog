import { ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { CreateAdmin } from "../pages/admin/userManagement/CreateAdmin";
import { CreateFaculty } from "../pages/admin/userManagement/CreateFaculty";
import { CreateStudent } from "../pages/admin/userManagement/CreateStudent";
import { NavLink } from "react-router-dom";

type TAdminRoute = {
	path: string;
	element: ReactNode;
};

type TAdminSidebar = {
	key: string;
	label: ReactNode;
	children?: TAdminSidebar[];
};

const adminPaths = [
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
];

export const adminSidebar = adminPaths.reduce((acc: TAdminSidebar[], curr) => {
	if (curr.children) {
		acc.push({
			key: curr.name,
			label: curr.name,
			children: curr.children.map((item) => ({
				key: item.name,
				label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
			})),
		});
	} else {
		acc.push({
			key: curr.name,
			label: <NavLink to={`/admin/${curr.path}`}>{curr.name}</NavLink>,
		});
	}
	return acc;
}, []);

export const adminRoutes = adminPaths.reduce((acc: TAdminRoute[], curr) => {
	if (curr.children) {
		curr.children.forEach((item) => {
			acc.push({
				path: item.path,
				element: item.element,
			});
		});
	} else {
		acc.push({
			path: curr.path,
			element: curr.element,
		});
	}
	return acc;
}, []);
