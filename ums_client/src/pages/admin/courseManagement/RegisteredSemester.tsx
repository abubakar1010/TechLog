import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TParams } from "../../../types";

type TDataType = {
	key: string;
	name: string;
	year: number;
	startMonth: string;
	endMonth: string;
};

const columns: TableColumnsType<TDataType> = [
	{
		title: "Name",
		dataIndex: "name",
		showSorterTooltip: { target: "full-header" },
		filters: [
			{
				text: "Autumn",
				value: "Autumn",
			},
			{
				text: "Fall",
				value: "Fall",
			},
			{
				text: "Summer",
				value: "Summer",
			},
		],
		// specify the condition of filtering result
		// here is that finding the name started with `value`
		onFilter: (value, record) => record.name.indexOf(value as string) === 0,
		sorter: (a, b) => a.name.length - b.name.length,
		sortDirections: ["descend"],
	},
	{
		title: "Year",
		dataIndex: "year",
		defaultSortOrder: "descend",
		sorter: (a, b) => a.year - b.year,
	},
	{
		title: "StartMonth",
		dataIndex: "startMonth",
		filters: [
			{
				text: "January",
				value: "January",
			},
			{
				text: "February",
				value: "February",
			},
			{
				text: "March",
				value: "March",
			},
			{
				text: "April",
				value: "April",
			},
			{
				text: "May",
				value: "May",
			},
			{
				text: "June",
				value: "June",
			},
			{
				text: "July",
				value: "July",
			},
			{
				text: "August",
				value: "August",
			},
			{
				text: "September",
				value: "September",
			},
			{
				text: "October",
				value: "October",
			},
			{
				text: "November",
				value: "November",
			},
			{
				text: "December",
				value: "December",
			},
		],
		onFilter: (value, record) =>
			record.startMonth.indexOf(value as string) === 0,
	},
	{
		title: "EndMonth",
		dataIndex: "endMonth",
		filters: [
			{
				text: "January",
				value: "January",
			},
			{
				text: "February",
				value: "February",
			},
			{
				text: "March",
				value: "March",
			},
			{
				text: "April",
				value: "April",
			},
			{
				text: "May",
				value: "May",
			},
			{
				text: "June",
				value: "June",
			},
			{
				text: "July",
				value: "July",
			},
			{
				text: "August",
				value: "August",
			},
			{
				text: "September",
				value: "September",
			},
			{
				text: "October",
				value: "October",
			},
			{
				text: "November",
				value: "November",
			},
			{
				text: "December",
				value: "December",
			},
		],
		onFilter: (value, record) => record.endMonth.indexOf(value as string) === 0,
	},
];

export const RegisteredSemester = () => {
	const [params, setParams] = useState<TParams[] | undefined>([]);
	const { data: semesterData, isFetching } = useGetAllAcademicSemesterQuery(params);

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

	const data = semesterData?.data?.map(
		({ _id, name, year, startMonth, endMonth }) => ({
			key: _id,
			name,
			year: Number(year),
			startMonth,
			endMonth,
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
