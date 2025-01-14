
import { Button, Layout } from "antd";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../ui/Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
import { toast } from "sonner";

const {Header, Content, Footer, } = Layout;



export const MainLayout: FC = () => {

	const dispatch = useAppDispatch()
	const handleLogout = () => {
		dispatch(logout())
		toast.success("Logout successful")
	}

	return (
		<Layout style={{minHeight: "100vh"}}>
			<Sidebar />
			<Layout>
				<Header style={{textAlign: "right"}} >
					<Button onClick={handleLogout}>Logout</Button>
				</Header>
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
