import NavBar from "@/components/shared/nav-bar";
import { ReactNode } from "react";

const AppLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<div>
			<div className=" mb-4">
				<NavBar />
			</div>
			{children}
		</div>
	);
};

export default AppLayout;
