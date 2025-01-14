import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerators";
// import { adminPaths } from "../../routes/adminRoutes";
import { facultyPaths } from "../../routes/facultyRoutes";

export const Sidebar = () => {
	return (
		<>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				
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
					items={sidebarItemsGenerator(facultyPaths, "faculty")}
				/>
			</Sider>
		</>
	);
};
