import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerators";
// import { adminPaths } from "../../routes/adminRoutes";
import { facultyPaths } from "../../routes/facultyRoutes";
import { useAppSelector } from "../../redux/hooks";
import {  selectToken } from "../../redux/features/auth/authSlice";
import { adminPaths } from "../../routes/adminRoutes";
import { UserRole } from "../../constant";
import { studentPath } from "../../routes/studentRoutes";
import { decodeToken } from "../../utils/decodeToken";

export const Sidebar = () => {

	const token = useAppSelector(selectToken)

	let user;
	if(token){
		user = decodeToken(token)
	}

	let sidebarItem;

	switch (user.role) {
		case UserRole.ADMIN:
			sidebarItem = sidebarItemsGenerator(adminPaths, UserRole.ADMIN)
			break;
		case UserRole.FACULTY:
			sidebarItem = sidebarItemsGenerator(facultyPaths, UserRole.FACULTY)
			break;
		case UserRole.STUDENT:
			sidebarItem = sidebarItemsGenerator(studentPath, UserRole.STUDENT)
			break;
	
		default:
			break;
	}

	return (
		<>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				style={{height: "100vh", position: "sticky", top: "0"}}
			>
				<h1
					style={{
						textAlign: "center",
						color: "white",
						margin: "10px 0",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					UMS
				</h1>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["4"]}
					items={sidebarItem}
				/>
			</Sider>
		</>
	);
};
