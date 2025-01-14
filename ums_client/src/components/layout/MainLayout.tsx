
import { Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../ui/sidebar";

const {Header, Content, Footer, } = Layout;



export const MainLayout: FC = () => {


	return (
		<Layout style={{minHeight: "100vh"}}>
			<Sidebar />
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
