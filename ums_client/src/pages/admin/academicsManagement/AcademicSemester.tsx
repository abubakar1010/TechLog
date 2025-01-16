import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";

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
				text: "Joe",
				value: "Joe",
			},
			{
				text: "Jim",
				value: "Jim",
			},
			{
				text: "Submenu",
				value: "Submenu",
				children: [
					{
						text: "Green",
						value: "Green",
					},
					{
						text: "Black",
						value: "Black",
					},
				],
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
				text: "London",
				value: "London",
			},
			{
				text: "New York",
				value: "New York",
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
				text: "London",
				value: "London",
			},
			{
				text: "New York",
				value: "New York",
			},
		],
		onFilter: (value, record) => record.endMonth.indexOf(value as string) === 0,
	},
];

const onChange: TableProps<TDataType>["onChange"] = (
	pagination,
	filters,
	sorter,
	extra
) => {
	console.log("params", pagination, filters, sorter, extra);
};

export const AcademicSemester = () => {
	const { data: semesterData } = useGetAllAcademicSemesterQuery(undefined);

	console.log(semesterData);

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
				columns={columns}
				dataSource={data}
				onChange={onChange}
				showSorterTooltip={{ target: "sorter-icon" }}
			/>
		</div>
	);
};
