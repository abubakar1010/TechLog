
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TParams } from "../../../types";
import { useGetAllOfferedCourseQuery } from "../../../redux/features/admin/courseManagementApi";

type TDataType = {
	key: string;
	academicDepartment: string;
	academicFaculty: string;
	faculty: string;
};

const columns: TableColumnsType<TDataType> = [
	{
		title: "Academic Faculty",
		dataIndex: "academicFaculty",
		showSorterTooltip: { target: "full-header" },
		
		// specify the condition of filtering result
		// here is that finding the name started with `value`
		// onFilter: (value, record) => record.name.indexOf(value as string) === 0,
		// sorter: (a, b) => a.name.length - b.name.length,
		// sortDirections: ["descend"],
	},
	{
		title: "Academic Department",
		dataIndex: "academicDepartment",
		defaultSortOrder: "descend",
		// sorter: (a, b) => a.year - b.year,
	},
	{
		title: "Faculty",
		dataIndex: "faculty",
		// filters: [
		// 	{
		// 		text: "January",
		// 		value: "January",
		// 	},
		// 	{
		// 		text: "February",
		// 		value: "February",
		// 	},
		// 	{
		// 		text: "March",
		// 		value: "March",
		// 	},
		// 	{
		// 		text: "April",
		// 		value: "April",
		// 	},
		// 	{
		// 		text: "May",
		// 		value: "May",
		// 	},
		// 	{
		// 		text: "June",
		// 		value: "June",
		// 	},
		// 	{
		// 		text: "July",
		// 		value: "July",
		// 	},
		// 	{
		// 		text: "August",
		// 		value: "August",
		// 	},
		// 	{
		// 		text: "September",
		// 		value: "September",
		// 	},
		// 	{
		// 		text: "October",
		// 		value: "October",
		// 	},
		// 	{
		// 		text: "November",
		// 		value: "November",
		// 	},
		// 	{
		// 		text: "December",
		// 		value: "December",
		// 	},
		// ],
		// onFilter: (value, record) =>
		// 	record.startMonth.indexOf(value as string) === 0,
	},
];

export const OfferedCourse = () => {
	const [params, setParams] = useState<TParams[] | undefined>([]);
	const { data: offeredCourseData, isFetching } =
		useGetAllOfferedCourseQuery(params);
		console.log("data", offeredCourseData)

	const onChange: TableProps<TDataType>["onChange"] = (
		pagination,
		filters,
		sorter,
		extra
	) => {
		if (extra.action === "filter") {
			const queryParams: TParams[] = [];
			filters.name?.forEach((item) => {
				queryParams.push({ name: "name", value: item });
			});
			filters.startMonth?.forEach((item) => {
				queryParams.push({ name: "startMonth", value: item });
			});
			filters.endMonth?.forEach((item) => {
				queryParams.push({ name: "endMonth", value: item });
			});
			setParams(queryParams);
		}
	};

	const data = offeredCourseData?.data?.map(
		({ _id, academicFaculty, academicDepartment, faculty }) => ({
			key: _id,
			academicDepartment,
			academicFaculty,
			faculty,
		})
	);

	return (
		<div>
			<Table<TDataType>
				loading={isFetching}
				columns={columns}
				dataSource={data}
				onChange={onChange}
				showSorterTooltip={{ target: "sorter-icon" }}
			/>
		</div>
	);
};
