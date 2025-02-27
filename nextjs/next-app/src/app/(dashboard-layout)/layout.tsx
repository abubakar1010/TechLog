import Dashboard from "@/components/shared/dashboard";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
	return (
		<div>
			<div className=" grid grid-cols-12 gap-4">
				<div className=" col-span-3">
                <Dashboard />
                </div>
				<div className=" flex w-full col-span-9 justify-between my-6 items-center flex-col h-screen">
					{children}
					<footer>Copyright © 2023 My App</footer>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
