import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { createElement, FC } from "react";

const {Header, Content, Footer, Sider } = Layout;

const items = [
	{
    icon: UserOutlined,
    label: "Dashboard"
  },
	{
    icon: VideoCameraOutlined,
    label: "User Management"
  },
	{
    icon: UploadOutlined,
    label: "Analytics"
  },
	{
    icon: UserOutlined,
    label: "Performance"
  },
].map((item, index) => ({
	key: String(index + 1),
	icon: createElement(item.icon),
	label: `${item.label}`,
}));

export const MainLayout: FC = () => {
	// const {
	// 	token: { colorBgContainer, borderRadiusLG },
	// } = theme.useToken();

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
					items={items}
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
						content
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Ant Design ©{new Date().getFullYear()} Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};
