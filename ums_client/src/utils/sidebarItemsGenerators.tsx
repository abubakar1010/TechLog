import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { TSource } from "../routes/types";

export type TAdminSidebar = {
	key: string;
	label: ReactNode;
	children?: TAdminSidebar[];
};

export const sidebarItemsGenerator = (source: TSource[], role: string) => source.reduce((acc: TAdminSidebar[], curr) => {
	if (curr.children) {
		acc.push({
			key: curr.name,
			label: curr.name,
			children: curr.children.map((item) => ({
				key: item.name,
				label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
			})),
		});
	} else {
		acc.push({
			key: curr.name,
			label: <NavLink to={`/${role}/${curr.path}`}>{curr.name}</NavLink>,
		});
	}
	return acc;
}, []);