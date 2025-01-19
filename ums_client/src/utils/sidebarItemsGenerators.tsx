import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { TSource } from "../routes/types";

export type TAdminSidebar = {
	key: string;
	label: ReactNode;
	children?: TAdminSidebar[] ;
} | undefined;

export const sidebarItemsGenerator = (source: TSource[], role: string) => source.reduce((acc: TAdminSidebar[], curr) => {


	if(curr.name && curr.path) {
		acc.push({
			key: curr.name,
			label: <NavLink to={`/${role}/${curr.path}`}>{curr.name}</NavLink>,
		});
	}

	if (curr.children && curr.name) {
		acc.push({
			key: curr.name,
			label: curr.name,
			children: curr.children.map((item) => {
				if(item.name){
					return {
						key: item.name,
						label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
					}
				}
		}),
		});
	}
	return acc;
}, []);