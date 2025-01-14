
import { Layout, Menu } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { adminSidebar } from "../../routes/adminRoutes";

const {Header, Content, Footer, Sider } = Layout;



export const MainLayout: FC = () => {


	return (
		<Layout style={{minHeight: "100vh"}}>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				onBreakpoint={(broken) => {
					console.log(broken);
				}}
				onCollapse={(collapsed, type) => {
					console.log(collapsed, type);
				}}
			>
				<h1 style={{textAlign: "center", color: "white", margin: "10px 0", display: "flex", justifyContent: "center", alignItems: "center"}}>
          UMS
        </h1>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["4"]}
					items={adminSidebar}
				/>
			</Sider>
			<Layout>
				<Header style={{ padding: 0  }} />
				<Content style={{ margin: "24px 16px 0" }}>
					<div
						style={{
							padding: 24,
							minHeight: "",
						}}
					>
						<Outlet />
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Ant Design ©{new Date().getFullYear()} Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};
